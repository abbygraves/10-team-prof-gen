// ** this page 'runs' the application **

const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generatePage = require("./src/generate-page");
const teamArray = [];

//TODO  
//FIXME
//REVIEW 
// QUESTION
// DONE
// IMPORTANT  



// DONE
// MENU OPTIONS
const displayMenu = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "menu",
      message: "Please select an option:",
      choices: ["Add Engineer", "Add Intern", "Finished Building Team"]
    }
  ]).then(menuOption => {
    switch (menuOption.menu) {
      case "Add Engineer":
        promptEngineer();
        break;
      case "Add Intern":
        promptIntern();
        break;
      case "Finished Building Team":
        finishedTeam();
        break;
    }
  })
};


// DONE
// MANAGER QUESTIONS
const promptManager = () => {
  return inquirer.prompt([
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
      type: "input",
      name: "email",
      message: "Please enter manager's email address:"
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter manager's office number:"
    }
  ]).then((userInput) => {
    const manager = new Manager(userInput.name, userInput.id, userInput.email, userInput.officeNumber);
    console.log(manager);
    teamArray.push(manager);
    displayMenu();
  })
};



// DONE
// ENGINEER QUESTIONS
const promptEngineer = () => {
  return inquirer.prompt([
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
      type: "input",
      name: "email",
      message: "Please enter engineer's email address:"
    },
    {
      type: "input",
      name: "github",
      message: "Please enter engineer's GitHub username:"
    }
  ]).then((userInput) => {
    const engineer = new Engineer(userInput.name, userInput.id, userInput.email, userInput.github);
    console.log(engineer)
    teamArray.push(engineer);
    displayMenu();
  })
};


// DONE
// INTERN QUESTIONS
const promptIntern = () => {
  return inquirer.prompt([
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
      type: "input",
      name: "email",
      message: "Please enter intern's email address:"
    },
    {
      type: "input",
      name: "school",
      message: "Please enter the name of the school the intern attends:"
    }
  ]).then((userInput) => {
    const intern = new Intern(userInput.name, userInput.id, userInput.email, userInput.school);
    console.log(intern)
    teamArray.push(intern);
    displayMenu();
  })
};




// TODO
// METHOD TO CREATE TEAM AND GENERATE HTML
const finishedTeam = () => {
  return inquirer.prompt([

  ])
};



// CALL MANAGER METHOD TO START THE QUESTIONS WHEN APP IS INVOKED
promptManager();





// INCOMPLETE CODE