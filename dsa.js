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
