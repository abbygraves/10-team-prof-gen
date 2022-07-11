const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

const engineer = new Engineer("Jack Skellington", "666", "halloween@scaremail.com", "ThePumpkinKing");

// ENGINEER OBJECT TEST
test("creates engineer object", () => {
  expect(engineer.name).toBe("Jack Skellington");
  expect(engineer.id).toBe("666");
  expect(engineer.email).toBe("halloween@scaremail.com");
  expect(engineer.github).toBe("ThePumpkinKing");
});


// TEST TO GET GITHUB USERNAME
test("check if getGithub() returns github username", () => {
  expect(engineer.getGithub()).toEqual("ThePumpkinKing");
});


// TEST TO GET ROLE
test("check if getRole() returns role", () => {
  expect(engineer.getRole()).toEqual("Engineer");
});


// CODE COMPLETE