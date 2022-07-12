const fs = require("fs");

let teamCards = [];


const generateManager = manager => {
  return `
  <div class="bg-gray-100 rounded drop-shadow-[5px_5px_4px_rgba(76,76,76)] basis-1/4">
    <div class="bg-bright-blue rounded-t">
      <h2 class="text-white text-2xl font-semibold px-4 pt-3">${manager.name}</h2>
      <h3 class="text-white text-xl font-semibold pl-4 pb-3"><i class="fa-solid fa-mug-hot pr-2"></i>Manager</h3>
    </div>
    <div class="text-sm">
      <div class="bg-white mx-4 mt-6 px-4 py-2 border-2 border-solid border-gray-200 rounded-t">
        <p>ID:
          <span>${manager.id}</span>
        </p>
      </div>
      <div class="bg-white mx-4 px-4 py-2 border-x-2 border-solid border-gray-200">
        <p>Email:
          <span class="text-bright-blue"><a href="mailto:${manager.email}">${manager.email}</a></span>
        </p>
      </div>
      <div class="bg-white mx-4 mb-6 px-4 py-2 border-2 border-solid border-gray-200 rounded-b">
        <p>Office Number:
          <span>${manager.officeNumber}</span>
        </p>
      </div>
    </div>
  </div>
  `
};

const generateEngineer = engineer => {
  return `
  <div class="bg-gray-100 rounded drop-shadow-[5px_5px_6px_rgba(76,76,76)] basis-1/4">
    <div class="bg-bright-blue rounded-t">
      <h2 class="text-white text-2xl font-semibold px-4 pt-3">${engineer.name}</h2>
      <h3 class="text-white text-xl font-semibold pl-4 pb-3"><i class="fa-solid fa-glasses pr-2"></i>Engineer</h3>
    </div>
    <div class="text-sm">
      <div class="bg-white mx-4 mt-6 px-4 py-2 border-2 border-solid border-gray-200 rounded-t">
        <p>ID:
          <span>${engineer.id}</span>
        </p>
      </div>
      <div class="bg-white mx-4 px-4 py-2 border-x-2 border-solid border-gray-200">
        <p>Email:
          <span class="text-bright-blue"><a href="mailto:${engineer.email}">${engineer.email}</a></span>
        </p>
      </div>
      <div class="bg-white mx-4 mb-6 px-4 py-2 border-2 border-solid border-gray-200 rounded-b">
        <p>GitHub:
          <span class="text-bright-blue"><a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></span>
        </p>
      </div>
    </div>
  </div>
  `
}


const generateIntern = intern => {
  return `
  <div class="bg-gray-100 rounded drop-shadow-[5px_5px_6px_rgba(76,76,76)] basis-1/4">
    <div class="bg-bright-blue rounded-t">
      <h2 class="text-white text-2xl font-semibold px-4 pt-3">${intern.name}</h2>
      <h3 class="text-white text-xl font-semibold pl-4 pb-3"><i class="fa-solid fa-user-graduate pr-2"></i>Intern</h3>
    </div>
    <div class="text-sm">
      <div class="bg-white mx-4 mt-6 px-4 py-2 border-2 border-solid border-gray-200 rounded-t">
        <p>ID:
          <span>${intern.id}</span>
        </p>
      </div>
      <div class="bg-white mx-4 px-4 py-2 border-x-2 border-solid border-gray-200">
        <p>Email:
          <span class="text-bright-blue"><a href="mailto:${intern.email}">${intern.email}</a></span>
        </p>
      </div>
      <div class="bg-white mx-4 mb-6 px-4 py-2 border-2 border-solid border-gray-200 rounded-b">
        <p>School:
          <span>${intern.school}</span>
        </p>
      </div>
    </div>
  </div>
  `
}


// the user input paramater becomes "data" (paramater below)
const generateTeam = data => {
  // console.log(data[i].role)
  for (let i = 0; i < data.length; i++)
    switch (data[i].role) {
      case "Manager":
        teamCards.push(generateManager(data[i]));
        break;

      case "Engineer":
        teamCards.push(generateEngineer(data[i]));
        break;

      case "Intern":
        teamCards.push(generateIntern(data[i]));
        break;

      default:
        break
    }
  // console.log(teamCards)
  teamCards = teamCards.join(``);
  return teamCards;
};




// combine all the job titles into an array in generateTEAM
module.exports = allInput => {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/6e1e3196b2.js" crossorigin="anonymous"></script>
    <!-- Tailwind CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              'peach': '#e74856',
              'bright-blue': '#0177f7',
            }
          }
        }
      }
    </script>
    <title>Team Profile</title>
  </head>

  <body>
    <header>
      <div class="bg-peach text-white white text-center p-8 text-4xl font-semibold drop-shadow-md">
        <p>My Team</p>
      </div>
    </header>
    <main class="mt-14 mx-40 flex flex-row flex-wrap gap-8 justify-center">
      ${generateTeam(allInput)}
    </main>
  </body>
  </html>
  `
};




// CODE COMPLETE