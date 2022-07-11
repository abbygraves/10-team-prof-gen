const Intern = require('../lib/Intern');

const intern = new Intern("Michael Scott", "9622", "PrisonMike@dundermifflin.com", "TheOffice");

// INTERN OBJECT TEST
test("creates intern object", () => {
  expect(intern.name).toBe("Michael Scott");
  expect(intern.id).toBe("9622");
  expect(intern.email).toBe("PrisonMike@dundermifflin.com");
  expect(intern.school).toBe("TheOffice");
});


// TEST TO GET SCHOOL
test("check if getSchool() returns school", () => {
  expect(intern.getSchool()).toEqual("TheOffice");
});


// TEST TO GET ROLE
test("check if getRole() returns role", () => {
  expect(intern.getRole()).toEqual("Intern");
});



// CODE COMPLETE