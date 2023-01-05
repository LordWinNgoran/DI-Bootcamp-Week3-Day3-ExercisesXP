//Exercise 1: Timer

/**
 * @author: N'goran Kouadio Jean Cyrille
 * @description: Timer
 * Date : 05/01/2023
 */



// Part I

//1 In your Javascript file, using setTimeout, call a function after 2 seconds.


let timer=setTimeout(sayHello, 2000);

//2 The function will alert “Hello World”.   
function sayHello() {
    alert("Hello World");
  }



// Part II

//1 In your Javascript file, using setTimeout, call a function after 2 seconds.

let timer2=setTimeout(addnewParagraph, 2000);

//2 The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
function addnewParagraph(){
let getContainer=document.getElementById('container')
let createP=document.createElement('p')
createP.textContent='Hello World'
getContainer.appendChild(createP)
}


// Part III

//1 In your Javascript file, using setInterval, call a function every 2 seconds.
let setinterval=setInterval(addnewParagraphPart2, 2000);

//2 The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

function addnewParagraphPart2(){
    let getContainer2=document.getElementById('container')
    let createP2=document.createElement('p')
    createP2.textContent='Hello World'
    getContainer2.appendChild(createP2)
    }

//3 The interval will be cleared (ie. clearInterval), when the user will click on the button. 

let button=document.getElementById('clear')

button.addEventListener("click",StopInterval)


function StopInterval(){
    clearInterval(setinterval);
}

/* 4 Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon 
as there will be 5 paragraphs inside the <div id="container">. */

let chrono=setInterval(checkNumberp, 1000);
// we create a function to check the number of p to clear the interval
function checkNumberp(){
    let getAllp=document.querySelectorAll('p').length

    if(getAllp==5){
        clearInterval(setinterval)
    }
}



