/*
Question 1
What is event bubbling in JavaScript?

An event flows from the target element up to the root element


Event Bubbling: Es cuando un evento fluye desde el elemento objetivo hasta el elemento raíz.
*/


/*
Question 2
What is event capturing in JavaScript?

An event flows from the root element down to the target element



Event Capturing: Es cuando un evento fluye desde el elemento raíz hasta el elemento objetivo.
*/


/*
Question 3
Which method is used to prevent the default action of an event?


event.preventDefault()


Prevenir la acción predeterminada de un evento: Se logra con event.preventDefault().
*/


/*
Question 4
Which method is used to stop an event from propagating to parent elements?

event.stopPropagation()


Detener la propagación del evento a elementos padres: Se hace con event.stopPropagation().
*/


/*
Question 5
What is an event handler in JavaScript?

A function that is called when an event occurs


Manejador de eventos en JavaScript: Es una función que se llama cuando ocurre un evento.
*/


/*
Question 6
How can you add an event listener for a click event on a button element?

button.addEventListener('click', function() { ... });


Agregar un escuchador de eventos para un clic en un botón: Utiliza button.addEventListener('click', function() { ... });.
*/


/*
Question 7
Which method can you use to stop the event from being handled by any other handlers in the current target?

event.stopImmediatePropagation()


Detener la propagación de eventos en el objetivo actual: Se logra con event.stopImmediatePropagation().
*/


/*
Question 8
What will the following code do?
document.getElementById('myLink').addEventListener('click', function(event) {
  event.preventDefault();
  alert('Link clicked!');
});

The default action of the link will be prevented, and an alert will be shown


Resultado del código proporcionado: El enlace no realizará su acción predeterminada y se mostrará una alerta.
*/

/*
Question 9
In which phase is the event target itself handled in event propagation?

Target phase


Fase de destino en la propagación de eventos: Es la fase en la que se maneja el objetivo del evento.
*/

/*
Question 10
What is the correct order of event phases in the W3C model?

Capturing phase, Target phase, Bubbling phase


Orden correcto de las fases de eventos en el modelo W3C: Fase de captura, fase de destino, fase de burbujeo.
*/