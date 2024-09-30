// You can nest conditional statements inside of each other. This allows you to check two or more conditions before executing the code in the innner if statement, while also allowing you to execute code in between the conditional statements, or execute code after the inner if statement.

let age = 22;
let hasDrivingLicense = true;

if (age >= 18) {
  console.log("You are old enough to drive.");

  if (hasDrivingLicense) {
    console.log("You can legally drive.");
  } else {
    console.log("You need to get a driving license to drive.");
  }

} else {
  console.log("You are too young to drive.");
}
