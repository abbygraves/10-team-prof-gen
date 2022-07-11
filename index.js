// runs the application

const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generatePage = require("./src/generate-page");
const teamArray = [];


// QUESTIONS
const menuQuestions = [
  {
    type: "list",
    name: "menu",
    message: "Please select an option:",
    choices: ["Add an Engineer", "Add an Intern", "Generate my Finished Webpage"]
  }
];


const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter manager's name:"
  },
  {
    type: "number",
    name: "id",
    message: "Please enter manager's employee ID number:"
  },
  {
    type:  "input",
    name: "email",
    message: "Please enter manager's email address:"
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please enter manager's office number:"
  },
];


const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter engineer's name:"
  },
  {
    type: "number",
    name: "id",
    message: "Please enter engineer's employee ID number:"
  },
  {
    type:  "input",
    name: "email",
    message: "Please enter engineer's email address:"
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please enter engineer's office number:"
  },
];


const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter intern's name:"
  },
  {
    type: "number",
    name: "id",
    message: "Please enter intern's employee ID number:"
  },
  {
    type:  "input",
    name: "email",
    message: "Please enter intern's email address:"
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please enter intern's office number:"
  },
];


// METHODS
promptManager = () => {
  inquirer
    .prompt(managerQuestions)
    .then((userInput) => {
      const manager = new Manager(userInput.name, userInput.id, userInput.email, userInput.officeNumber);
      teamArray.push(manager);
      displayMenu();
    })
};




displayMenu = () => {

};



promptManager();