var users_joined = [];
var chatrooms = {'west_side':{}, 'east_side':{}};

window.new_user_joined = function(name) {
	users_joined.unshift(name);
}

//this function is only called once by the server every five seconds
window.assign_to_chatroom = function() {
	//add this element for every user assigned to a chatroom: <p><button type="button" class="btn btn-warning btn-xs">[[name]]</button></p>
    console.log("assigning users to rooms");

    var westChatSelector = $('.chat-1 > .users');
    var eastChatSelector = $('.chat-2 > .users');
    var currentUser = "";
    //Determine which chatroom has the least amount of users and add to it
    while(users_joined.length > 1){
    	currentUser = users_joined.pop();
    	if(westChatSelector.children().length < eastChatSelector.children().length){
    		//Add to hash table, creating a unique key using the user's name
    		if(!chatrooms.west_side.hasOwnProperty(currentUser)){
    			westChatSelector.append('<p><button type="button" class="btn btn-warning btn-xs">' + currentUser + '</button></p>');
    		}
    		chatrooms.west_side[currentUser] = currentUser;
	    		
	    } else {
	    	//Add to hash table, creating a unique key using the user's name
	    	if(!chatrooms.east_side.hasOwnProperty(currentUser)){
	    		eastChatSelector.append('<p><button type="button" class="btn btn-warning btn-xs">' + currentUser + '</button></p>');
	    	}
	    	chatrooms.east_side[currentUser] = currentUser;
	    }
    }
}