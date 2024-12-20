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

///////////////////////////////////////////////////////////////////////////////////


/**
 * QUESTION 3:
 * Create a function that takes the length and width of a rectangle and 
 * returns its perimeter.
 * 
 * calcPerimeter(6,7) -> 26
 * 
 * function hoursIntoSeconds(hour) {
    return hour * 60 * 60
}

console.log(hoursIntoSeconds(2));
 * 
 */


////////////////////////////////////////////////////////////////

/**
 * QUESTION 4:
 * Write a function that takes the base and height of a triangle and return 
 * its area. 
 * 
 * calTriangleArea(3,2) -> 3
 * 
 * - Take in two arguments, base + height
 * - Formula to calculate area is 0.5 * base * height
 * - Return the answer and console.log it
 * 
 * function calTriangleArea(base, height) {
  return 0.5 * base * height
}

console.log(calTriangleArea(3, 2))
 * 
 * 
 * 
 */


/////////////////////////////////////////////////////////////////////

/***
 * QUESTION 5: 
 * Write a function that accepts a string and adds 'Frontend' onto the end of it
 * 
 * appendFrontend("apple") -> applefrontend
 * 
 * accepts a string
 * adding strings is similar to numbers
 * dont forget to return result
 * 
 * 
 * 
 * function appEndFrontend(string) {
    return string + "FrontEnd"
}

console.log(appEndFrontend("Apple"));
 * 
 * 
 */

//////////////////////////////////////////////////////////////////////////

/**
 * QUESTION 6:
 * Given two numbers, return true if the sum of both numbers is greater than 100.
 * Otherwise return false
 * sumGreaterThan100(50,60) -> true
 * 
 * function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100;
}

console.log(sumGreaterThan100(60, 40));
 */

/////////////////////////////////////////////////////////////////////////////////

/**
 * Question 7:
 * Write a function that accepts a number and returns true if it is less
 * than or equal to zero. Otherwise return false.
 * 
 * lessthanorequaltozero(3) -> false
 * 
 * 
 * function lessThanOrEqualToZero(number) {
 return number <= 0
}

console.log(lessThanOrEqualToZero(0))
 */

/////////////////////

/**
 * Question 8:
 * Given a boolean (true or false), return the opposite boolean
 * oppositeboolean(true) -> false
 * 
 * 
function oppositeBoolean(opp) {
    return !opp;
}

console.log(oppositeBoolean(true));
 */

/////////////////////////////////////////////////////////////

/**
 * Question 9:
 * Given ANY element, return true if it is NOT the number 0.
 * 
 * 
 * function isNotZero(num) {
    return num !== 0
}
console.log(isNotZero(0))
 */

//////////////////////////////////////////////////////////////////

/**
 * Question 10:
 * Given two numbers return their remainder when divided by each other.
 * 
 * calcRemainder(4, 2) -> 0
 * 
 * function calcRemainder(num1, num2) {
    return num1 % num2
}

console.log(calcRemainder(9, 8))
 */

////////////////////////////////////////////

/**
 * Question 11:
 * Given two numbers, return true if the number is odd. 
 * isOdd(1) -> True
 * 
 * function isOdd(num1) {
    return num1 % 2 === 0
}
console.log(isOdd(2))
 */

/**
 * Question 12: Create a function that takes a number argument and returns 1
 * if the number is even. If the number is odd return -1.
 * 
 * booleaninteger(1) -> -1
 * booleaninteger(2) -> 1
 * """"""""""""""(5) -> -1
 * 
 * function booleanInteger(num) {
 return num % 2 === 0 ? 1 : -1
}

console.log(booleanInteger()) 
 */


/**
 * Question 13:
 * Create a function that takes in two strings. If the first string is 
 * equalto 'Logged_IN' AND the second string is equal to 'subscribed'
 * return true otherwise return false
 * 
 * isloggedinandsubscribed('logged_in, subscribed) -> true
 * 
 */

function isLoggedInAndSubscribed(string1, string2) {
    return string1 === "Logged_In" && string2 === "Subscribed" ? true : false;
}

console.log(isLoggedInAndSubscribed("Logged_In", "Subscribed"))

/**
 * Question 14
 * create a function that takes in two strings. If the first string is equal to
 * logged_in OR the second string is equal to subscribed - return true
 * other wise return false.
 * 
 * for this question its the same as the question above but we are using the
 * OR operator which is ||
 * 
 */
