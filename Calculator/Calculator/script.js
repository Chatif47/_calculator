let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      try {
        string = eval(string); // Evaluate the expression
        input.value = string; // Display the result
      } catch (error) {
        input.value = "Error"; // If there's an error, display it
      }
    } else if (e.target.innerHTML == 'AC') {
      string = ""; // Clear the input
      input.value = string;
    } else if (e.target.innerHTML == 'DEL') {
      string = string.slice(0, -1); // Remove the last character
      input.value = string;
    } else {
      string += e.target.innerHTML; // Append the button value to the string
      input.value = string;
    }
  });
});
