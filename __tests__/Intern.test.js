const Intern = require('../lib/Intern');

const intern = new Intern("Kool-Aid Man", "543", "OhYeahhh@koolmail.com", "Wall Smashers University");

// INTERN OBJECT TEST
test("creates intern object", () => {
  expect(intern.name).toBe("Kool-Aid Man");
  expect(intern.id).toBe("543");
  expect(intern.email).toBe("OhYeahhh@koolmail.com");
  expect(intern.school).toBe("Wall Smashers University");
});


// TEST TO GET SCHOOL
test("check if getSchool() returns school", () => {
  expect(intern.getSchool()).toEqual("Wall Smashers University");
});


// TEST TO GET ROLE
test("check if getRole() returns role", () => {
  expect(intern.getRole()).toEqual("Intern");
});


// CODE COMPLETE

