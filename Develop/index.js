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
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What steps are required to install your project (Required)?',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('You need to enter a steps!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your Collaborators, if any, and links to their GitHub profiles',
        validate: creditsInput => {
          if (creditsInput) {
            return true;
          } else {
            console.log('List those that you collaborated with');
            return false;
          }
        }
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
        validate: featuresInput => {
          if (featuresInput) {
            return true;
          } else {
            console.log('You need to enter a steps!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ]);
};

// Function to initialize app

function init() {
    questions().then(responses=>{ 
        console.log(responses)
    })
   
}
init();

// const READMEfile = '# ${name}'

// fs.writeFile('./utils/README.md', README.md), err => {
//     if (err) throw err;
//     console.log ('saved!');
    
// };