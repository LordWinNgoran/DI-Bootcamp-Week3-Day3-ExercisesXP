//Exercise 3: Drag & Drop

/**
 * @author: N'goran Kouadio Jean Cyrille
 * @description: Drag & Drop
 * Date : 05/01/2023
 */


//1 Copy the code above, to a structured HTML file.
//Done see exercise3.html

/* 2 In your Javascript file add the functionality which will allow you to 
drag the box and drop it into the target. Check out the Course Notes named DOM animations. */



//WE take the div target 

let target=document.getElementById('target')
// We set all attributes for target div
target.setAttribute("ondrop","dragDrop(event)")
target.setAttribute("ondragover","allowDrop(event)")
target.setAttribute("ondragenter","allowEnter(event)")
target.setAttribute("ondragleave","allowLeave(event)")


//WE take the div box 
let box=document.getElementById('box')
// We set all attributes for box div
box.setAttribute("draggable","true")
box.setAttribute("ondragstart","dragStart(event)")


//this function allow us to drop
function allowDrop(event) {
   event.preventDefault(); // Necessary. Allows us to drop.
 }
 
 //permit to enter
 function allowEnter(event) {
   event.target.classList.add('over');
 }
 
 //remove
 function allowLeave(event) {
   event.target.classList.remove('over');
 }
 
 
 function dragStart(event) {
 //set the data to be dragged
 console.log("target:",  event.target)
 console.log("id: ",  event.target.id ) // id: square1
 event.dataTransfer.setData("text", event.target.id);
 }
 
 function dragDrop(event) {
 
 event.preventDefault();
 // retrieve the data dragged
   
 let data = event.dataTransfer.getData("text");
 console.log("data: ",  data) //data: square1 
   
 let box = document.getElementById(data)
 event.target.appendChild(box);
 }
