/*

JAVASCRIPT EVENT HANDLERS

JavaScript event handlers allow you to create a reaction to a user event.

If you want to send an alert to the user when the user clicks on a button or hovers over an element, you can use an event handler to invoke a JavaScript function that reacts to this user event.

Event Handling is comprised of 3 steps:

1. Select the element node(s) you want the script to respond to. Get the DOM node for that element.
2. Choose which event on the selected node(s) will trigger the response. Bind an event to the DOM node.
3. Choose the code that will run when the event occurs. Trigger a function when the event occurs on a specified element. 

*/

// 1. HTML EVENT HANDLERS

// 2. TRADITIONAL DOM EVENT HANDLERS

//  element.onevent = functionName;

const changeImgBtn = document.getElementById('seasons');
const seasonsImg = document.getElementById('seasons-img');

changeImgBtn.onclick = function () {
  switch (seasonsImg.getAttribute('src')) {
    case ('img/fall.jpg'):
      seasonsImg.src = 'img/winter.jpg';
      break;
    case ('img/winter.jpg'):
      seasonsImg.src = 'img/spring.jpg';
      break;
    case ('img/spring.jpg'):
      seasonsImg.src = 'img/summer.jpg';
      break;
    case ('img/summer.jpg'):
      seasonsImg.src = 'img/fall.jpg';
      break;
    default:
      seasonsImg.src = 'img/fall.jpg';
  }
}