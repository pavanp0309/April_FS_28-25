// TYpes of Errors

// 1.Syntax_Error
// 2.REFERENCE Error
// 3.TYPE_ERROR
// 4.EVAL_ERROR

// let a='hello
// let 2a='hello'
console.log("welcome");

// // console.log(a) //before declaration /Uncaught ReferenceError:
// let a;

// {
//     let b=10
// }
// // console.log(b)//Uncaught ReferenceError: b

// let data=undefined
// data() //Uncaught TypeError: undefined is not a function

// console.log("hello welcome")

// try{
//   let a=undefined
//   a()//typeerr
// }catch(err){
//  console.log(err.message)
//  console.log(err.name)

// }
//  console.log("hello welcome")

//  try{
//   let a=undefined
//   a()//typeerr
// }catch(err){
//  console.log(err.message)
//  console.log(err.name)
// if(err.name=="TypeError"){
//     throw "ur giving different type here"
//  }

// }
//  console.log("hello welcome")

// Error Handling Concepts

// 1. Try-Catch-Finally Example
function data() {
  try {
    let payment = parseInt(prompt("enter a payment"));
    console.log("User input type:", typeof payment);
    if (isNaN(payment)) {
      // Throw a custom error if input is not a valid number
      throw new Error("Invalid payment: Please enter a valid number.");
    }
    console.log("Payment accepted:", payment);
    return "ok";
  } catch (err) {
    console.log("Error caught:", err.message);
    console.log("Error name:", err.name);
  } finally {
    console.log("Execution completed (finally block).");
  }
}
data();

// 2. Custom Error Example
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
try {
  throw new CustomError("This is a custom error!");
} catch (err) {
  console.log("Custom error caught:", err.name, err.message);
}

// 3. Throwing Errors Manually
function checkPositive(num) {
  if (num < 0) {
    throw new Error("Number must be positive");
  }
  console.log("Number is positive:", num);
}
try {
  checkPositive(-5);
} catch (err) {
  console.log("Manual error caught:", err.message);
}

// 4. Error Object Properties
try {
  throw new Error("Sample error");
} catch (err) {
  console.log("Error name:", err.name);    // "Error"
  console.log("Error message:", err.message); // "Sample error"
  console.log("Error stack:", err.stack);   // Stack trace
}

// 5. Nested Try-Catch and Rethrowing
try {
  try {
    throw new Error("Inner error");
  } catch (err) {
    console.log("Inner catch:", err.message);
    throw err; // rethrow
  }
} catch (err) {
  console.log("Outer catch:", err.message);
}

//