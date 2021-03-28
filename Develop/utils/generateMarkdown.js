const fs = require('fs');

function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:
  

  
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Badges](#badges)
  - [Additional Info](#additional-info)
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Credits:
  ${data.credits}
  ## Contribution:
  ${data.contribution}
  ## Badges:
  ${data.badges}
  ## Testing:
  ${data.testing}
  ## Name:
  ${data.name}
  ## Github: [${data.github}](https://github.com/${data.github})
  ## Email: ${data.email} `;
}

module.exports = generateMarkdown;


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//function generateMarkdown(userResponses, userInfo) {
  // return # ${data.title} figure out return after var
//Table of Contents Here    
//   let toc = `tableOfContents`

//     if 



