// Example 1: Reassigning Function Parameters
function updateUser(user) {
    user = { ...user, isActive: true }; // Reassigning the parameter object
    return user;
  }
  
  const myUser = { name: 'John Doe', isActive: false };
  const updatedUser = updateUser(myUser);
  
  console.log(myUser); // Output: { name: 'John Doe', isActive: false }
  console.log(updatedUser); // Output: { name: 'John Doe', isActive: true }
  
  // Example 2: Mutating Function Parameters
  function processArray(arr) {
    arr.push('Extra item'); // Mutating the parameter array
    return arr.map(item => item.toUpperCase());
  }
  
  const myArray = ['apple', 'banana'];
  const processedArray = processArray(myArray);
  
  console.log(myArray); // Output: ['apple', 'banana', 'Extra item']
  console.log(processedArray); // Output: ['APPLE', 'BANANA', 'EXTRA ITEM']
  
  // Example 3: Multiple Return Statements
  function calculateScore(score) {
    if (score < 0) {
      return 'Invalid score';
    }
  
    if (score >= 90) {
      return 'A';
    } else if (score >= 80) {
      return 'B';
    } else if (score >= 70) {
      return 'C';
    } else if (score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  
    // Unreachable code
    console.log('This code is unreachable');
  }
  
  console.log(calculateScore(95)); // Output: 'A'
  console.log(calculateScore(85)); // Output: 'B'
  console.log(calculateScore(-5)); // Output: 'Invalid score'
  
  // Example 4: Floating-Point Precision Issues
  function calculateTax(amount) {
    const taxRate = 0.075;
    const tax = amount * taxRate;
    return tax;
  }
  
  const total = 100.7;
  const taxAmount = calculateTax(total);
  
  console.log(taxAmount); // Output: 7.552500000000001 (Due to floating-point precision issue)
  
  // Example 5: Inconsistent Naming Conventions
  const myVariable = 'Hello';
  const ANOTHER_VARIABLE = 'World';
  
  function camelCaseFunction() {
    console.log(myVariable);
  }
  
  function snake_case_function() {
    console.log(ANOTHER_VARIABLE);
  }
  
  camelCaseFunction(); // Output: 'Hello'
  snake_case_function(); // Output: 'World'