export function escapeHTML(str) {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;")
		.replace(/\t/g, '&nbsp;&nbsp;')
		.replace(/ /g, '&nbsp;');
 }

export function nl2br(str) {
	return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2');
}

export function parsePort(str) {
	//0.0.0.0:32768->3000/tcp
	return str.split(':')[1].split('->')[0];
}

export function escapeCode(str) {
	return str.replace(/"/g, '\\"');
}

export function encodeB64(str) {
	return window.btoa(unescape(encodeURIComponent(str)));
}

export function decodeB64(str) {
	return decodeURIComponent(escape(window.atob(str)));
}

export function getNow() {
	var now = new Date();
	return '' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
}
