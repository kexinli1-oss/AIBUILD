// fetchCategories.js

// Function to fetch and print the category tree
function fetchAndPrintCategoryTree() {
  fetch('http://localhost:8080/categoryTree') // Replace with your server's URL if needed
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(categoryTree => {
      console.log('Category Tree:');
      console.log(JSON.stringify(categoryTree, null, 2)); // Pretty-print the JSON
    })
    .catch(error => {
      console.error('Error fetching category tree:', error);
    });
}

// Call the function to fetch and print the category tree
fetchAndPrintCategoryTree();
