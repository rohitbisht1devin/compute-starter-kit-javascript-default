// Example 1: Nested Function Closures
function outerFunction() {
    const outerVar = 'Outer variable';
  
    function innerFunction() {
      const innerVar = 'Inner variable';
      console.log(outerVar); // Lints fine
  
      function nestedFunction() {
        const nestedVar = 'Nested variable';
        console.log(innerVar); // May be missed by linting
        console.log(outerVar); // May be missed by linting
      }
  
      nestedFunction();
    }
  
    innerFunction();
  }
  
  outerFunction();
  
  // Example 2: Hoisting and Variable Shadowing
  let globalVar = 'Global variable';
  
  function scopeTest() {
    console.log(globalVar); // Output: 'Global variable'
  
    let globalVar = 'Shadowed variable'; // May be missed by linting
    console.log(globalVar); // Output: 'Shadowed variable'
  }
  
  scopeTest();
  
  // Example 3: Ternary Operator with Side Effects
  function processList(list) {
    const result = [];
    for (const item of list) {
      const isValid = validateItem(item);
      isValid ? result.push(item) : console.log(`Invalid item: ${item}`); // Side effect may be missed by linting
    }
    return result;
  }
  
  function validateItem(item) {
    // Validation logic
    return true;
  }
  
  const myList = [1, 2, 3, 4, 5];
  const validList = processList(myList);
  console.log(validList); // Output: [1, 2, 3, 4, 5]
  
  // Example 4: Async/Await and Promise Handling
  async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      console.log('Fetch completed'); // Linting may not catch unreachable code
      return 'This is unreachable'; // Linting may not catch unreachable code
    }
  }
  
  fetchData();
  
  // Example 5: Unused Destructured Properties
  function processUser({ name, email, age }) {
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    // age property is unused, but may be missed by linting
  }
  
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
  };
  
  processUser(user);