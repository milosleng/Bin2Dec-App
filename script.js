// ## User Stories

// -   [ ] User can enter up to 8 binary digits in one input field
// -   [ ] User must be notified if anything other than a 0 or 1 was entered
// -   [ ] User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered

//select elements
const binaryTextArea = document.getElementById('binary');
const decimalTextArea = document.getElementById('decimal');
const button = document.getElementById('convert');
const buttonClear = document.getElementById('clear');

// TODO: SIMPLE SOLUTION
// control binary area
binaryTextArea.addEventListener('keydown', (event) => {
  if (event.keyCode === 8 || event.key.match(/[0-1]/g)) {
    return Number(binaryTextArea.value);
  } else {
    event.preventDefault() + alert("You can enter only 1's and 0's!");
  }
});

// control decimal area
decimalTextArea.addEventListener('keydown', (event) => {
  if (event.keyCode === 8 || event.key.match(/[0-9]/g)) {
    return Number(decimalTextArea.value);
  } else {
    event.preventDefault() +
      alert('You can enter any number, but not letters or special signs!');
  }
});

//convert to dec fn
button.addEventListener('click', () => {
  const value = binaryTextArea.value;
  const x = value.toString();
  decimalTextArea.innerText = parseInt(x, 2);
});

//convert to bin fn
button.addEventListener('click', () => {
  const value = decimalTextArea.value;
  const n = parseInt(value, 10);
  if (Number.isNaN(n)) {
    binaryTextArea.innerText = n;
  }
  binaryTextArea.innerText = n.toString(2);
});

//clear input fields
buttonClear.addEventListener('click', () => {
  binaryTextArea.value = '';
  decimalTextArea.value = '';
  location.reload();
});

//check for Nan
button.addEventListener('click', () => {
  if (isNaN(decimalTextArea.value) && isNaN(binaryTextArea.value)) {
    alert('You need to input some value');
    location.reload();
  }
});

// TODO: ARRAY SOLUTION

// // binary to dec fn
// button.addEventListener('click', () => {
//   const value = binaryTextArea.value;
//   const toArr = value.toString().split('');
//   let newArr = [];
//   for (let i = 0; i < toArr.length; i++) {
//     if (Number(toArr[i]) === 1) {
//       newArr.push(Math.pow(2, toArr.length - (i + 1)));
//     }
//   }
//   decimalTextArea.innerText = newArr.reduce((curr, total) => curr + total);
// });

// // dec to binary fn
// button.addEventListener('click', () => {
//   const value = decimalTextArea.value;
//   let binaryArr = [];
//   let currNum = value;
//   while (currNum > 0.5) {
//     if (currNum % 2 === 0) {
//       binaryArr.push(0);
//       currNum = currNum / 2;
//     } else if (currNum % 2 > 0) {
//       binaryArr.push(1);
//       currNum = (currNum - (currNum % 2)) / 2;
//     }
//   }
//   binaryArr.reverse().toString();
//   binaryTextArea.innerText = Number(binaryArr.join(''));
// });

// buttonClear.addEventListener('click', () => {
//   binaryTextArea.value = '';
//   decimalTextArea.value = '';
//   location.reload();
// });

// //checking the backspace keycode
// // window.addEventListener('keydown', (event) => {
// //   console.log(
// //     `Keycode for this event is ${event.keyCode}, and the key is ${event.key}`
// //   );
// // });
