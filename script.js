// ## User Stories

// -   [ ] User can enter up to 8 binary digits in one input field
// -   [ ] User must be notified if anything other than a 0 or 1 was entered
// -   [ ] User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered

//selects elements
const binaryTextArea = document.getElementById('binary');
const decimalTextArea = document.getElementById('decimal');
const button = document.getElementById('convert');

//control binary area

binaryTextArea.addEventListener('keydown', (event) => {
  if (event.keyCode === 8 || event.key.match(/[0-1]/g)) {
    return Number(binaryTextArea.value);
  } else {
    event.preventDefault() + alert("You can enter only 1's and 0's!");
  }
});

//control decimal area
decimalTextArea.addEventListener('keydown', (event) => {
  if (event.keyCode === 8 || event.key.match(/[0-9]/g)) {
    return Number(decimalTextArea.value);
  } else {
    event.preventDefault() +
      alert('You can enter any number, but not letters or special signs!');
  }
});

button.addEventListener('click', () => {});

//binary to dec fn
function binaryToDec(num) {
  const toArr = num.toString().split('');
  let newArr = [];
  for (let i = 0; i < toArr.length; i++) {
    if (Number(toArr[i]) === 1) {
      newArr.push(Math.pow(2, toArr.length - (i + 1)));
    }
  }
  return newArr.reduce((curr, total) => curr + total);
}
console.log(binaryToDec(1000110));

//dec to binary fn

//check if you can convert negative values too!

//checking the backspace keycode
// window.addEventListener('keydown', (event) => {
//   console.log(
//     `Keycode for this event is ${event.keyCode}, and the key is ${event.key}`
//   );
// });
