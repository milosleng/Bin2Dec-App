//input controller
const binaryTextArea = document.getElementById('binary');
const decimalTextArea = document.getElementById('decimal');
console.log(binaryTextArea, decimalTextArea);

//control binary area
binary.addEventListener('keydown', (event) => {
  if (event.keyCode === 8 || event.key.match(/[0-1]/g)) {
    return event;
  } else {
    event.preventDefault();
  }
});

//control decimal area
decimalTextArea.addEventListener('keydown', (event) => {
  if (event.keyCode === 8 || event.key.match(/[0-9]|/g)) {
    return event;
  } else {
    event.preventDefault();
  }
});

//check if you can convert negative values too!

//checking the backspace keycode
// window.addEventListener('keydown', (event) => {
//   console.log(
//     `Keycode for this event is ${event.keyCode}, and the key is ${event.key}`
//   );
// });
