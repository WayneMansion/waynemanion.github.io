let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "images/puppy.jpg"){
        myImage.setAttribute('src',"images/puppy2.jpg");
    } else {
        myImage.setAttribute('src',"images/puppy.jpg");
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername() {
    let myName = prompt('Please enter your name!'); //gives a prompt on the screen and accepts data...stores the data in myName variable
    if(!myName){
        setUsername();
    } else {
    localStorage.setItem('name', myName); // sets a variable named 'name' in local storage with value equal to myName
    myHeading.textContent = "Puppies are love, " + myName;
    }
}

if(!localStorage.getItem(name)){ //name used without "" coz !"null" is false and !null is true
    setUsername();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Puppies are love, " + storedName;
}

myButton.onclick = function () {
    setUsername();
}