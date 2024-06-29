/*
Question 1
What is event bubbling in JavaScript?

An event flows from the target element up to the root element
*/


/*
Question 2
What is event capturing in JavaScript?

An event flows from the root element down to the target element
*/


/*
Question 3
Which method is used to prevent the default action of an event?


event.preventDefault()
*/


/*
Question 4
Which method is used to stop an event from propagating to parent elements?

event.stopPropagation()
*/


/*
Question 5
What is an event handler in JavaScript?

A function that is called when an event occurs
*/


/*
Question 6
How can you add an event listener for a click event on a button element?

button.addEventListener('click', function() { ... });
*/


/*
Question 7
Which method can you use to stop the event from being handled by any other handlers in the current target?

event.stopImmediatePropagation()
*/


/*
Question 8
What will the following code do?
document.getElementById('myLink').addEventListener('click', function(event) {
  event.preventDefault();
  alert('Link clicked!');
});

The default action of the link will be prevented, and an alert will be shown
*/

/*
Question 9
In which phase is the event target itself handled in event propagation?

Target phase
*/

/*
Question 10
What is the correct order of event phases in the W3C model?

Capturing phase, Target phase, Bubbling phase
*/