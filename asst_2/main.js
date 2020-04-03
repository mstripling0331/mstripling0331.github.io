const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i < 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic" + i +".jpg");
    thumbBar.appendChild(newImage);

    /* onclick handler */
    newImage.onclick = function(p){
        displayedImage.setAttribute('src', p.target.getAttribute('src'));
    }

}  

/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
        if(btn.getAttribute('class') === "dark"){
            btn.setAttribute('class', "light");
            btn.innerHTML = "Lighten";
            overlay.style.backgroundColor =  "rgba(0,0,0,0.5)";
        }
        else{
            btn.setAttribute('class', "dark");
            btn.innerHTML = "Darken";
            overlay.style.backgroundColor =  "rgba(0,0,0,0)";
        }
    }
