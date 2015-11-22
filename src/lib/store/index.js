import Firebase from 'firebase';
import { encodeB64, getNow } from './../util.js'

const ref = new Firebase('https://teamcloud.firebaseio.com/');
const store = {};

export default store;

if (sessionStorage.getItem('username') !== null) {
	store.username = sessionStorage.getItem('username');
}

store.getUsername = function () {
	if (typeof this.username === 'undefined' || this.username === '') {
		return '無名氏';
	}
	return this.username;
}

store.setUsername = function (newUsername) {
	this.username = newUsername;
	sessionStorage.setItem('username', newUsername);
}

store.setFirepad = function (pad) {
	this.firepad = pad;
}

store.getCode = function () {
	return this.firepad.getText();
}

store.getCodepads = function (room, cb) {
	ref.child(room + '/codepadList').on('value', function(snap) {
		cb(snap.val());
	});
}

store.addCodepad = function (room, name, cb) {
	ref.child(room + '/codepadList').push(name);
}

store.deleteCodepad = function (room, pad) {
	ref.child(room + '/codepadList/' + pad.key).remove();
	ref.child(room + '/codepad/' + encodeB64(pad.name)).remove();
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

store.logs = [];

store.addLog = function (padname, code, data) {
	var log = {
		'time': getNow(),
		'padname': padname,
		'code': code,
		'data': data
	};
	this.logs.push(log);
}

store.getLogs = function () {
	return this.logs;
}
