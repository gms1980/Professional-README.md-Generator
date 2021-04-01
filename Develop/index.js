// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

//Array of questions for user input to Generate README file
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project? (Required)",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project (Required)",
  },
  {
    type: "input",
    name: "installation",
    message: "What steps are required to install your project (Required)?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use (Required)",
  },
  {
    type: "input",
    name: "credits",
    message:
      "List your Collaborators, if any, and links to their GitHub profiles",
  },
  {
    type: "confirm",
    name: "badges",
    message: "Would you like to add badges to this project?",
    default: false,
  },
  {
    type: "input",
    name: "testing",
    message: "Were ther any tests conducted?",
  },
  {
    type: "checkbox",
    name: "licenses",
    message: "What licenses did you use with this project",
    choices: ["MIT", "GNU AGPLv3", "Apache 2.0", "None"],
  },
  {
    type: "input",
    name: "name",
    message: "Enter your name",
  },
  {
    type: "input",
    name: "github",
    message: "enter your Github username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("I hope! this Works!");
  });
}

// Function to initialize app

function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("./utils/README.md", generateMarkdown(userInput));
  });
}

// Function to initialize app
init();
