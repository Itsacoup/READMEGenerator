
//modules required
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const createMarkdown = require("./createMarkdown.js")

//questions to prompt user with inquirer
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please describe the steps required to install this project.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Please provide instructions and examples of this project in use.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Please provide a process for how other developers can contribute to this project.",
        name: 'contribute'
    },
    {
        type: 'input',
        message: "Please provide any details about tests written for this application and info on running them.",
        name: 'test'
    },
    {
        type: 'input',
        message: "If applicable, provide licensing this application. (view https://choosealicense.com/ for help)",
        name: 'license'
    },
    {
        type: 'input',
        message: "Please provide contact info here, including your GitHub account and/or the repository for this app, and a note on how to best contact you for questions",
        name: 'contact'
    }

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

const writeFileAsync = util.promisify(writeToFile);


async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = createMarkdown(userResponses);
        console.log(markdown);
    
        // Write markdown to file
        await writeFileAsync('newREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }

}

// function call to initialize program
init();
