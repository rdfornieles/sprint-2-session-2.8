'use strict';

const face = document.querySelector(".head");

const wink = document.querySelector(".face");

function handleFaceClick () {
    wink.innerHTML = ";)";

}

function handleFaceHover () {
    wink.innerHTML = ":)";
}
    

face.addEventListener("click", handleFaceClick);
face.addEventListener("mouseout", handleFaceHover);