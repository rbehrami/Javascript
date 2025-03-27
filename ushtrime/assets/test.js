
/*
function checkName(inputName) {
  const namesArray = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

  // Check if the input name matches any name in the array
  if (namesArray.includes(inputName)) {
    console.log('Your name matches a name in the array!');
  } else {
    const randomName = namesArray[Math.floor(Math.random() * namesArray.length)];
    console.log(`Your name is not the name randomly generated. Randomly generated name: ${randomName}`);
  }
}

// Example usage:
checkName('Alice'); // Change 'John' to any name to test it

*/

function checkRandomNameMatch(namesArray) {
  // Get a random name from the array
  const randomName = namesArray[Math.floor(Math.random() * namesArray.length)];
  
  // Get user input
  const userName = prompt("Enter a name to guess:");
  
  // Compare (case-insensitive)
  if (userName && userName.toLowerCase() === randomName.toLowerCase()) {
    console.log(`🎉 Congratulations! "${userName}" matches the random name "${randomName}"!`);
  } else {
    console.log(`😢 Sorry, "${userName}" doesn't match the random name "${randomName}". Try again!`);
  }
}

// Example usage:
const names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"];
checkRandomNameMatch(names);