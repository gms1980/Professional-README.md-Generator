// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
//const generatePage = require('./utils/README.md');
// const {writeFile, copyfile} = require('./utils/README.md');
//console.log(generatePage());


//Array of questions for user input to Generate README file
const questions = () => {
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',       
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',        
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What steps are required to install your project (Required)?',       
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use (Required)',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your Collaborators, if any, and links to their GitHub profiles',
        
      },
      {
        type: 'confirm',
        name: 'badges',
        message: 'Would you like to add badges to this project?',
        default: false
      },
      {
        type: 'input',
        name: 'features',
        message: 'Did you want to present any features?',        
      },
      {
        type: 'checkbox',
        name: 'licenses',
        message: 'What licenses did you use with this project',
        choices: ['MIT', 'Other']
        
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter your name',          
      }, 
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
      },    
    ]);
};

// Function to initialize app

function init() {
    questions().then(responses=>{ 
        console.log(responses)
    })
   
}
init();



// fs.writeFile('./utils/README.md', questions), err => {
//     if (err) throw err;
//     console.log ('saved!');
    
// };