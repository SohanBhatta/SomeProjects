
const headingPara = document.querySelector('.headingParaDiv');

// This is also test
let inputBox = document.querySelectorAll('.inputbox');
let loginSubmit = document.querySelector('.submit');



loginSubmit.addEventListener('click', () =>{

    if(inputBox.innerText !== ""){
        loginSubmit.disabled = false;
        console.log("button is diable");
    }

})

//This is the end of selections of test




let btn = document.querySelector('#btn');

let backspace = document.querySelector('#backspace');
let login = document.querySelector('.rreg');
let register = document.querySelector('.re');
let content = document.querySelector('.email');

let box = document.querySelector('.loginbox');
box.classList.add('box1');


let x = "0";


btn.addEventListener('click', () =>{
    box.style.transform = "scale(1)";
    headingPara.style.transform = "scale(0)";
    box.classList.remove('box1');
    box.style.marginTop = "100px";

});



backspace.addEventListener('click', () =>{
box.style.transform = "scale(0)";
headingPara.style.transform = "scale(1)";

});

register.addEventListener('click', () =>{
    if(x = "0"){
        
 x = x - 420;
 x = x + "px";
content.style.marginTop = x;

box.style.height = "520px";
box.style.marginTop = "60px";
    }

console.log("login butoon is clicked")

});

login.addEventListener('click', () =>{
x = "0";

content.style.marginTop = x + "px";
box.style.height = "400px";
 box.style.marginTop = "150px";
});







