var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listofli = document.querySelectorAll("li");
var deletebutton = document.createElement("button");
var body = document.body;
body.style.backgroundColor = "GREEN";
deletebutton.appendChild(document.createTextNode("deletbtn"));



function checkLis() {
    return document.getElementsByTagName('li').length;
}


function inputLength() {
    return input.value.length;
}

function createListElement() {
    var deletebutton = document.createElement("button");
    deletebutton.appendChild(document.createTextNode("remove"));
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    if (checkLis() > 0) {
        var emptyList = document.querySelector('h2');
        emptyList.style.display = "none";

    }
    li.addEventListener("click", toggleclass);
    li.insertAdjacentElement("beforeend", deletebutton);//or li.append(deletebutton); 
    deletebutton.addEventListener("click", dltitem);


    function dltitem() {

        deletebutton.parentElement.remove();
        if (checkLis() == 0) {
            var emptyList = document.querySelector('h2');
            emptyList.style.display = "block";
        }


    }
}



function addListAfterClick() {



    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function toggleclass() {

    this.classList.toggle("done");
    if (this.className === "done") {
        this.style.textDecoration = "line-through";
    }
    else
        this.style.textDecoration = "none";
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
