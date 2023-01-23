
const formInput = document.querySelector('#color');
const bodyBgColor = document.querySelector('#bgColor');
const button = document.querySelector("#btn");



function bgColorChanger() {

const colorInput= formInput.value;
bodyBgColor.style.backgroundColor = `${colorInput}`;
}

/* bgColorChanger(); */