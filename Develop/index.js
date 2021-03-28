// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
//const generatePage = require('./utils/README.md');
// const {writeFile, copyfile} = require('./utils/README.md');
//console.log(generatePage());
// TODO: Create an array of questions for user input
//const questions = () => {
    //return 

    inquirer.prompt([
      {
        type: 'input',
        name: 'title',
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
        type: 'checkbox',
        name: 'licences',
        message: 'What licences did you use with this project? (Check all that apply',
        choices: ['MIT', 'GNU', 'Apache-2.0', 'ISC']
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
    ])

.then(answers =>{
    const {title, description, installation, usage, credits, badges} = answers
console.log (answers);

// TODO: Create a function to write README file
// function writeToFile('generateMarkdown.js', data) {}

//const destructure answers
 
// const README.md = $(title)
// ![Github licence] $badge
//return `# ${data.title}
// ${renderLicenseBadge(data.license)}

//     ## Description
// ${data.description}

//     ## .Table of Contents
//     -[Description] #description 
//     -[Installation] #installation
//     -[Usage] #usage
//     -[Credits] #credits
//     -[Badges] #badges
    
//     ## .Description
// ${data.decription}

//     ## .Installation
// ${data.instalation}

//     ## .Usage
// ${data.usage}

//     ## .Credits
// ${data.credits}

//     ## .Badges
// ${data.badges}
// `


// // TODO: Create a function to initialize app

// function init() {
//     questions().then(responses=>{ 
//         console.log(responses)
//     })   
// }
// Function call to initialize app
//  init();

//  function generateMarkdown(userResponses, userInfo) {
//     return `# ${data.title} figure out return after var
fs.writeFile('./utils/README.md', READMEfile, err => {
    if (err) {
        console.log(err);
    }else{
    console.log ('saved!');
    };
}
)};
  
//   //module.exports = generateMarkdown;
