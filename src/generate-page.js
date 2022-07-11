let teamArray = [];


generateMgmr = team => {
  return `
  <div class="card">
    <h2>${manager.name}</h2>
    <h2>${manager.id}</h2>
    <h2>${manager.email}</h2>
    <h2>${manager.role}</h2>
  </div>
  `
}

// generateEngineer
// generateIntern


// the user input paramater becomes "team" (paramater below)
generateTeam = team => {
  console.log(team[i].role)
  for (let i = 0; i < team.length; i++)
    switch (team[i].role) {
      case "Manager":
        teamArray.push(generateMgmr(team[i]));
        break;

      case "Engineer":
        teamArray.push(generateEngineer(team[i]));
        break;

      case "Intern":
        teamArray.push(generateIntern(team[i]));
        break;

      default:
        break
    }
    console.log(teamArray)
    teamArray = teamArray.join(``);
    return teamArray;
};



module.exports = input => {
  // combine all the job titles into an array in generateTEAM
}


$(generateTeam(input))