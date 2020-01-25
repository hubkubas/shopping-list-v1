var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var btndelete = document.getElementById("buttondelete");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(btn);
	input.value = "";
	btn.innerHTML = "delete";
	btn.id = "buttondelete";
}



function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}


	function deleteItems(event) {
	var target = event.target;
	var btncheck = event.target.nodeName;
	if (btncheck === "BUTTON") {
		target.parentNode.remove()
	}
	  }


function addListAfterClickPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleClassDoneOnAndOff(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}

button.addEventListener("click", addListAfterClick);

btndelete.addEventListener("click", btnDelete);

input.addEventListener("keypress", addListAfterClickPress);

ul.addEventListener("click", toggleClassDoneOnAndOff);

ul.addEventListener("click", deleteItems);