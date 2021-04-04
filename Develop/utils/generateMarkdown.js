const fs = require("fs");

function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:
  ![badge](https://img.shields.io/badge/license-${data.licenses}-brightgreen)
  <br />
  This application is covered by the ${data.licenses} license.

  
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation) 
  - [Usage](#usage)
  - [Credits](#credits)
  - [Contributions](#contributions)
  - [Badges](#badges)
  - [Testing](#testing)
  - [Name](#name)
  - [Github](#github)
  - [Email](#email)


  ## Description:
  ${data.description}
  
  ## Installation:
  ${data.installation}
   
  ## Usage:
  ${data.usage}
  
  ## Credits:
  ${data.credits}
  
  ## Contributions:
  ${data.contributions}
  
  ## Badges:  
  ${data.badges}  
  

  ## Testing:
  ${data.testing}
  

  ## Name: 
  ${data.name}
  
  ## Github: 
  [${data.github}](https://github.com/${data.github})
  
  ## Email: 
  ${data.email} `;
}

module.exports = generateMarkdown;

