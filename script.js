function handleChange(){
    let tech = document.getElementById("select").value;

    if(tech=="React"){
        document.getElementById("Text").innerText = "this is react";
    }else if(tech=="Node"){
        document.getElementById("Text").innerText = "this is node";
    }else if(tech=="Angular"){
        document.getElementById("Text").innerText = "this is angular";
    }else if(tech=="MongoDB"){
        document.getElementById("Text").innerText = "this is mongodb";
    }
}
function btn1(){
    document.body.style.backgroundColor = "red";
}
function btn4(){
    document.body.style.backgroundColor = "black";
}
function btn2(){
    document.body.style.backgroundColor = "blue";
}
function btn3(){
    document.body.style.backgroundColor = "green";
}

let fs = 26;

function inc(){
    fs+=1
    document.getElementById("Text").style.fontSize = `${fs}px`;
}

function dec(){
    fs-=1
    document.getElementById("Text").style.fontSize = `${fs}px`;
}
function low(){
    let t = document.getElementById("Text").textContent;
    let result = t.toLowerCase();
    document.getElementById("Text").textContent = result;
}
function upp(){
    let t = document.getElementById("Text").textContent;
    let result = t.toUpperCase();
    document.getElementById("Text").textContent = result;
}
