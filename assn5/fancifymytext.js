function makeBigger() {
    alert("Hello, world!");
    document.getElementById("textInput").style.fontSize = "24pt";
}

function fancifyText() {
	let text = document.getElementById("textInput");

	if (document.getElementById("fancy").checked) {
		text.style.fontWeight = "bold";
		text.style.color = "blue";
		text.style.textDecoration = "underline";
	} else {
		text.style.fontWeight = "normal";
		text.style.color = "black";
		text.style.textDecoration = "none";
	}
}