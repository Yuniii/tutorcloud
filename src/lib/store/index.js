import Firebase from 'firebase';

const ref = new Firebase('https://teamcloud.firebaseio.com/');
const store = {};

export default store;

store.getCodepads = function(room, cb) {
	ref.child(room + '/codepadList').once('value', function(snap) {
		cb(snap.val());
	});
}

store.addCodepad = function(room, name, cb) {
	ref.child(room + '/codepadList').push(name);
}

store.getChatItems = function (room, cb) {
	ref.child(room + '/chat').limitToLast(100).on('value', function (snap) {
		cb(snap.val());
	});
}

store.addChatItem = function (room, username, content, cb) {
	ref.child(room + '/chat').push({
		'user': username,
		'content': content
	}, cb);
}
