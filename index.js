//Getting nodeElement from the DOM 

const notifyBtn = document.querySelector('.submitBtn');

let formEle = document.querySelector('.alert-me');

let inputEmail =  formEle.querySelector('#email');

let validRegex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/


notifyBtn.addEventListener('click', () => {

  if(inputEmail.value == null || inputEmail.value =="") {
    formEle.classList.add('active');
    inputEmail.placeholder = "example@email/com"
    return false;
  } else if (inputEmail.value.match(validRegex)) {
    return true;
  }else {
    formEle.classList.add('active');
  }
})


//Making the anchor tag change color anytime I hover over their parent element li

let link1 = document.querySelector('.link1');
let link2 = document.querySelector('.link2');
let link3 = document.querySelector('.link3');



function bgChanger1() {
  link1.parentElement.classList.add('color');
}

function bgChanger2() {
  link2.parentElement.classList.add('color');
}

function bgChanger3() {
  link3.parentElement.classList.add('color');
}


// Hover out function
function bgChangerOut1() {
  link1.parentElement.classList.remove('color');
}

function bgChangerOut2() {
  link2.parentElement.classList.remove('color');
}

function bgChangerOut3() {
  link3.parentElement.classList.remove('color');
}



