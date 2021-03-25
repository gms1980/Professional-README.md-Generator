// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        Name: "Name",
        message: "What is the name of your project?",
        validate: nameInput => {
           if (nameInput) {
               return true;
            } else {
            console.log('Please enter the Title of your project');
            return false;
           }
        }
    },
    
    
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
