fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => data.forEach((e) => console.log(e.name)))
  .catch((error) => console.log(`Error: ${error.message}`)); //harusnya error.message
