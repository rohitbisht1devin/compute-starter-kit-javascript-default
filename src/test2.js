// Example 1: Unused function parameters
function calculateArea(length, width) {
    return length * width;
  }
  
  const area = calculateArea(5, 10); // Lints fine
  const area2 = calculateArea(10); // This will build, but linting may not catch the missing parameter
  
  console.log(area); // Output: 50
  console.log(area2); // Output: NaN
  
  // Example 2: Unused variables in nested functions
  function outerFunction() {
    const outerVar = 'Outer variable';
  
    function innerFunction() {
      const innerVar = 'Inner variable';
      console.log(outerVar); // Lints fine
    }
  
    const unusedInnerVar = 'This variable is unused';
    innerFunction();
  }
  
  outerFunction();
  
  // Example 3: Conditional statements with side effects
  function processData(data) {
    let result;
  
    if (data.length > 0) {
      result = data.map(item => item * 2);
    } else {
      result = []; // Lints fine
      result.push(0); // This side effect may be missed by linting
    }
  
    return result;
  }
  
  const data1 = [1, 2, 3];
  const data2 = [];
  
  console.log(processData(data1)); // Output: [2, 4, 6]
  console.log(processData(data2)); // Output: [0]
  
  // Example 4: Implicit type conversions
  function concatenateStrings(str1, str2) {
    const result = str1 + str2;
    return result;
  }
  
  const output1 = concatenateStrings('Hello', ' World'); // Lints fine
  const output2 = concatenateStrings(5, 10); // This will build, but linting may not catch the implicit conversion
  
  console.log(output1); // Output: 'Hello World'
  console.log(output2); // Output: '510'