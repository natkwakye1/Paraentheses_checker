# Parentheses_checker


This project implements algorithms to check if parentheses in a string are properly balanced and nested. It also provides a function to find the position of the first offending parenthesis if the string is not properly balanced.

## Algorithms

### a. Are Parentheses Balanced

This algorithm returns true if a string contains properly nested and balanced parentheses, and false otherwise. It uses a stack to keep track of the number of left parentheses seen so far.

### b. Find First Offending Parenthesis

This algorithm returns the position in the string of the first offending parenthesis if the string is not properly nested and balanced. If an excess right parenthesis is found, it returns its position; if there are too many left parentheses, it returns the position of the first excess left parenthesis. It uses a stack to keep track of the number and positions of the left parentheses seen so far.

## Usage

To use the algorithms, create an instance of the `ParenthesesChecker` class and call the appropriate member functions:

function isBalanced(str) {
    const stack = [];
    for (const char of str) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();   
        }
    }
    return stack.length === 0; 
}


function findFirstOffendingPosition(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(i);
        } else if (str[i] === ')') {
            if (stack.length === 0) {
                return i; // More right parentheses than left ones
            }
            stack.pop();
        }
    }
    return stack.length === 0 ? -1 : stack.pop(); // If there are excess left parentheses
}

function checkParentheses(str) {
    const resultDiv = document.getElementById("result");

    const balanced = isBalanced(str);
    if (balanced) {
        resultDiv.innerHTML = `The parentheses in '${str}' are balanced.`;
    } else {
        const position = findFirstOffendingPosition(str);
        if (position !== -1) {
            resultDiv.innerHTML = `The parentheses in '${str}' are not balanced. First offending parenthesis at position ${position}.`;
        }
    }
}

// An event attached to the input that gets the user's input in real time and passes it to the isBalancedFuction
document.querySelector("#inputString").addEventListener('input',
  (e) => {
    let userValue = e.target.value;
    checkParentheses(userValue)
  })

