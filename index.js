// TODO: Include packages needed for this application

const generate = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Title of the project: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Github username: ',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Email: ',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Description of the project: ',
        name: 'description',
    },
    {
        type: 'list',
        message: 'Installation instructions: ',
        name: 'installation',
        choices: ['npm i','npm install','npm install inquirer@^8.0.0']
    },
    {
        type: 'list',
        message: 'License: ',
        name: 'license',
        choices: ['Apache License 2.0','Boost Software License 1.0','GNU GPL v3','The MIT License','Mozilla Public License 2.0','Common Development and Distribution License','Eclipse Public License 1.0','IBM Public License Version 1.0', 'No License']
    },
    {
        type: 'input',
        message: 'Usage information: ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contribution guidelines: ',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Test instructions: ',
        name: 'test',
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((data) => {
    
    const filename = `${data.title.toUpperCase().split(' ').join('-')}.md`;
    const readme = generate.generateMarkdown(data);
    writeToFile(filename, readme);
    
  })

    
}

// Function call to initialize app
init();
