// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = data => {


return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Please Enter the Title of your Project',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please Enter a Description for your Project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter Installation Instructions',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter Usage Information',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage information!');
                return false;
            }
        }   
    },

    {
        type: 'list',
        name: 'license',
        message: 'Please select the type of license you used',
        choices: ['MIT', 'Apache License 2.0', 'ISC'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please choose a license!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter Contribution Guidelines',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter Contribution Guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter Tests for your application',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please enter testing information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub Username?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub Username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    }

])
.then(({title, description, installation, usage, license, contribution, tests, username, email}) => {
  
    const template =  `# ${title}

# Table of Contents
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [License](#license)
    5. [Contribution](#contribution)
    6. [Tests](#tests)
    7. [Questions](#questions)

# Description
${description}
        
# Installation 
${installation}
        
# Usage
${usage}
        
# License
${license}
        
# Contribution
${contribution}
        
# Tests
${tests}

# Questions
For questions, reach out to ${email}
Or visit https://github.com/${username}`;

    writeToFile(title, template);
  });
};

  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./README.md', data, err => {
        if (err) throw new Error(err);

        console.log('Page created! Check out README.md in this directory to see it!');
    })
}



promptUser();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
