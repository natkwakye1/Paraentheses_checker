# Parentheses_checker


This project implements algorithms to check if parentheses in a string are properly balanced and nested. It also provides a function to find the position of the first offending parenthesis if the string is not properly balanced.

## Algorithms

### a. Are Parentheses Balanced

This algorithm returns true if a string contains properly nested and balanced parentheses, and false otherwise. It uses a stack to keep track of the number of left parentheses seen so far.

### b. Find First Offending Parenthesis

This algorithm returns the position in the string of the first offending parenthesis if the string is not properly nested and balanced. If an excess right parenthesis is found, it returns its position; if there are too many left parentheses, it returns the position of the first excess left parenthesis. It uses a stack to keep track of the number and positions of the left parentheses seen so far.

## Usage

To use the algorithms, create an instance of the `ParenthesesChecker` class and call the appropriate member functions:

```cpp
#include "parentheses_checker.h"
#include <iostream>

int main() {
    ParenthesesChecker checker;
    
    std::string str = "((())())()";
    if (checker.areParenthesesBalanced(str)) {
        std::cout << "Parentheses are balanced." << std::endl;
    } else {
        std::cout << "Parentheses are not balanced." << std::endl;
    }

    int position = checker.findFirstOffendingParenthesis(str);
    if (position != -1) {
        std::cout << "Position of the first offending parenthesis: " << position << std::endl;
    } else {
        std::cout << "No offending parenthesis found." << std::endl;
    }

    return 0;
}
