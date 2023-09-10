## Coding Test Solution
This repository contains the solution to a coding test, demonstrating proficiency in Javascript (Node.js). The project comprises of two major components:

1. A server that converts and delivers category data in a tree structure.
2. A script to check internet connection quality based on the response time from a given URI.


# Files and Descriptions:

## 1. server.js:
A server using Express.js.
Reads data from a categories.json file and converts a flat category array into a tree structure.
Has an endpoint /categoryTree that returns the tree-structured category data.
## 2. checkInternetConnection.js:
Checks the quality of an internet connection using Node's https module.
Tries to get a response from a specified URI (https://www.google.com by default).
Assesses the quality of the connection as "good", "fine", or "terrible" based on the response time.

# Usage:

## 1. Server (server.js):
Run: node server.js
Access the /categoryTree endpoint via a web browser or tools like Postman to fetch the tree-structured category data.

## 2. Internet Connection Checker (checkInternetConnection.js):
Run: node checkInternetConnection.js
Check the console for the internet connection quality assessment.

# Notes:
Ensure you have Node.js installed.
Necessary packages like express and https (built-in with Node) should be installed before executing the scripts.
The server runs on port 8080. Ensure the port is available before starting the server.
Remember to adjust the README according to any specifics or additional steps you might have in mind. After writing this README, you can add it to your repository, commit, and then push to GitHub.

Once it's on GitHub, make sure to navigate to the main page of your repository and see if the README displays correctly. This will ensure anyone looking at your repository understands its contents and knows how to run your code.
