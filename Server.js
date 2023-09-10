const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080; // Use port 8080

app.use(express.json());

// Read data from "categories.json" file
let categories = [];
try {
  const data = fs.readFileSync('categories.json', 'utf8');
  categories = JSON.parse(data);
} catch (err) {
  console.error('Error reading "categories.json" file:', err);
  process.exit(1);
}

// Function to convert the flat array into a tree
function buildCategoryTree(categories) {
  const categoryTree = [];
  const categoryMap = new Map();

  // Create a map of categories for efficient lookup
  categories.forEach(category => {
    category.children = [];
    categoryMap.set(category.categoryId, category);
  });

  categories.forEach(category => {
    if (category.parent === 'root') {
      categoryTree.push(category);
    } else {
      const parentCategory = categoryMap.get(category.parent);
      if (parentCategory) {
        parentCategory.children.push(category);
      }
    }
  });

  return categoryTree;
}


// Endpoint to get the category tree
app.get('/categoryTree', (req, res) => {
  const rootCategories = buildCategoryTree(categories, 'root');

  // Assuming you want to add a root node
  const tree = {
    categoryId: "root",
    name: "Root Category",
    parent: null,
    children: rootCategories
  };

  res.json(tree);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});