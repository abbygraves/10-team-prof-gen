const Manager = require('../lib/Manager');

const manager = new Manager("Michael Scott", "9622", "PrisonMike@dundermifflin.com", "TheOffice");

// MANAGER OBJECT TEST
test("creates manager object", () => {
  expect(manager.name).toBe("Michael Scott");
  expect(manager.id).toBe("9622");
  expect(manager.email).toBe("PrisonMike@dundermifflin.com");
  expect(manager.officeNumber).toBe("TheOffice");
});


// TEST TO GET OFFICE NUMBER
test("check if getOfficeNumber() returns office number", () => {
  expect(manager.getOfficeNumber()).toEqual("TheOffice");
});


// TEST TO GET ROLE
test("check if getRole() returns role", () => {
  expect(manager.getRole()).toEqual("Manager");
});


// CODE COMPLETE