/** QUESTION NUMBER 1
 * Return the function of two numbers
 * Create a function that takes two arguments as functions and return their sum
 * addition (3,2) -> 5
 * 
 * 
 * function addition(num1, num2) {
    return num1 + num2
}
console.log(addition(3, 5));
 * 
 * 
 * 
 */


//////////////////////////////////////////////////////////////////////////////////////////////

/** QUESTION NUMBER 2
 * Create a function that converts hours into seconds
 * hoursintoSeconds(2) -> 7200
 * 
 * function hoursIntoSeconds(hour) {
    return hour * 60 * 60
}

console.log(hoursIntoSeconds(2));
 * 
 */


/**
 * QUESTION 3:
 * Create a function that takes the length and width of a rectangle and 
 * returns its perimeter.
 * 
 * calcPerimeter(6,7) -> 26
 * 
 */

function calcPerimeter(length, width) {
    return length * 2 + width * 2
}

console.log(calcPerimeter(6, 7))