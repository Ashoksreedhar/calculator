

function buttonclick(val) {

    document.getElementById("screen").value = document.getElementById("screen").value + val;
}

console.log("working");


function delButton() {
    let screen = document.getElementById("screen");
    let curnValue = screen.value;
    screen.value = curnValue.slice(0, -1);
}

function clearButton(){
document.getElementById("screen").value=""
}

function equalClick() {

    let text = document.getElementById("screen").value
    let result = eval(text)
    document.getElementById("screen").value = result
}


function sqrtButton() {
    let num = document.getElementById("screen").value;
    let result = num * num;
    document.getElementById("screen").value = result
}

function cubeButton() {
    let num = document.getElementById("screen").value;
    let result = num * num * num;
    document.getElementById("screen").value = result
}
