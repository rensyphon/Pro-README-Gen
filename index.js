//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

//array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage of this project?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license does this project use?',
        choices: ['Apache2.0', 'GNU3.0', 'MIT', 'none'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please list your contributors.',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What are the instructions to run your tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What email can questions be directed to?',
        name: 'questions',
    },
];

//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

//function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response)
            writeToFile('./dist/readme.md', generateMarkdown(response))
        });
}

//initialize app
init();