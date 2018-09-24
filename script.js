// Section 4: Events

// oncopy
function copy() {
	window.alert("You copied some text. Good job!");
}
document.getElementById("copy_this").oncopy = copy;
 
// onclick
function send_alerts() {
	window.alert("Hi there, and welcome to my page!");
	window.alert("HPlease sign the guest book before you leave!");
	window.alert("Are these alerts annoying you yet? Ha, Ha!");

}
var button = document.getElementById("get_alerts");
button.onclick = send_alerts;

// ondblclick
function dbl_clk() {
	window.alert("you just double clicked");
}
document.ondblclick = dbl_clk;