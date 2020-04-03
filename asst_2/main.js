const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

/*
newImage.setAttribute('src', xxx);
thumbBar.appendChild(newImage);*/

for (let i = 1; i < 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic" + i +".jpg");
    thumbBar.appendChild(newImage);
    newImage.onclick = function(p){
        displayedImage.setAttribute('src', p.target.getAttribute('src'));
    }

}  


/* Wiring up the Darken/Lighten button */
