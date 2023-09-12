## Coding Test Solution
This repository contains the solution to a coding test, demonstrating proficiency in Javascript (Node.js). The project comprises of three major components:

1. A server that converts and delivers category data in a tree structure.
2. A script to check internet connection quality based on the response time from a given URI.
3. A React Category Selection App with Redux

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

## React Category Selection App with Redux

This repository contains a simple React application that uses Redux to store category data fetched from a server. The app allows users to select a category using the Ant Design TreeSelect component, and it demonstrates two different approaches for making asynchronous API calls:

1. Fetching categories using Redux Saga.
2. Fetching categories using a custom React Hook.

### Project Structure

The project is structured as follows:

- **src**: Contains the source code for the React application.
  - **actions.js**: Defines Redux actions to fetch and set categories.
  - **reducers.js**: Defines a Redux reducer to manage the application's state.
  - **sagas.js**: Contains Redux Saga code to handle asynchronous data fetching.
  - **useCategories.js**: A custom React Hook for fetching and storing categories.
  - **App.js**: The main React component that displays the TreeSelect and handles category selection.
- **public**: Contains public assets like HTML and CSS files.
- **index.js**: The entry point of the React application.
- **store.js**: Sets up the Redux store and integrates Redux Saga.
- **README.md**: This README file.

### Installation and Usage

To run the application, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.
4. Start the application using `npm start`.
5. Access the app in your web browser at `http://localhost:3000`.

### Functionality

- The app displays two buttons: "Fetch Categories with Saga" and "Fetch Categories with Custom Hook."
- Clicking these buttons triggers the asynchronous fetching of category data from a server (replace the API URL with your own).
- The fetched categories are stored in Redux, and the TreeSelect component displays them.
- When a category is selected in the TreeSelect, an alert displays the selected category's ID.

### Dependencies

This project uses the following dependencies:

- React
- Redux
- Redux Saga
- Ant Design
- axios (for making HTTP requests)
