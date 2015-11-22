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
/*
export function escapeFirebaseURL(str) {
	return str
	.replace(/./g, '-．-')
	.replace(/#/g, '-＃-')
	.replace(/$/g, '-＄-')
	.replace(/\[/g, '-［-')
	.replace(/\]/g, '-］-');
}
*/
export function encodeB64(str) {
	return window.btoa(unescape(encodeURIComponent(str)));
}

export function decodeB64(str) {
	return decodeURIComponent(escape(window.atob(str)));
}
