const fs = require('fs');

function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:
  
  [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)
  
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
  [![made-with-Markdown](https://img.shields.io/badge/${data.badges}Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
  
  ## Testing:
  ${data.testing}
  
  ## Name:
  ${data.name}
  
  ## Github: [${data.github}](https://github.com/${data.github})
  
  ## Email: ${data.email} `;
}

module.exports = generateMarkdown;

// [![badge](https://img.shields.io/badge/dynamic/json?url=<URL>&label=<LABEL>&query=<$.DATA.SUBDATA>&color=<COLOR>&prefix=<PREFIX>&suffix=<SUFFIX>


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



