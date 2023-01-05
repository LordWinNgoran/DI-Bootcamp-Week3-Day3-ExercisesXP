//Exercise 2: Move The Box

/**
 * @author: N'goran Kouadio Jean Cyrille
 * @description: Move The Box
 * Date : 05/01/2023
 */

//1 Copy the code above, to a structured HTML file.
// Done see the exercise2.html


// We take the button by Id 
let button=document.querySelector(button)

//we add a addEventListener on click
button.addEventListener("click",myMove)

// We create a function to move

function myMove() {
    let elem = document.getElementById("animate");
    let pos = 0;
    let id = setInterval(function() {
      if (pos == 350) {
        clearInterval(id);
      }
      else {
        pos++;
        elem.style.left = pos + "px";
      }

// play each  1 seconde
    }, 1000);
  }
