/*
Events 1
In our first events-related task, you need to create a simple event handler that causes the text inside the button (btn) to change when it is clicked on, and change back when it is clicked again.

The HTML should not be changed; just the JavaScript.

Try updating the live code below to recreate the finished example:

const btn = document.querySelector('.off');
*/

//ANSWER





/*
Events 2
Now we'll look at keyboard events. To pass this assessment you need to build an event handler that moves the circle around the provided canvas when the WASD keys are pressed on the keyboard. The circle is drawn with the function drawCircle(), which takes the following parameters as inputs:

x — the x coordinate of the circle.
y — the y coordinate of the circle.
size — the radius of the circle.
Try updating the live code below to recreate the finished example:



const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    function drawCircle(x, y, size) {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.fillStyle = 'black';
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      ctx.fill();
    }

    let x = 50;
    let y = 50;
    const size = 30;

    drawCircle(x, y, size);


// Add your code here
*/




/*
Events 3
In the next events-related task, you need to set an event listener on the <button>s' parent element (<div class="button-bar"> … </div>), which when invoked by clicking any of the buttons will set the background of the button-bar to the color contained in the button's data-color attribute.

We want you to solve this without looping through all the buttons and giving each one their own event listener.

Try updating the live code below to recreate the finished example:

const buttonBar = document.querySelector('.button-bar');

  // Add your code here

  
*/