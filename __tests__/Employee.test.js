const Employee = require('../lib/Employee');
const employee = new Employee("John Doe", "111", "johndoe@email.com");

// EMPLOYEE OBJECT TEST
test("creates employee object", () => {
  expect(employee.name).toBe("John Doe");
  expect(employee.id).toBe("111");
  expect(employee.email).toBe("johndoe@email.com");
});


// TEST TO GET NAME
test("check if getName() returns name", () => {
  expect(employee.getName()).toEqual("John Doe");
});


// TEST TO GET ID
test("check if getId() returns ID", () => {
  expect(employee.getId()).toEqual("111");
});


// TEST TO GET EMAIL
test("check if getEmail() returns email address", () => {
  expect(employee.getEmail()).toEqual("johndoe@email.com");
});


// TEST TO GET ROLE
test("check if getRole() returns role", () => {
  expect(employee.getRole()).toEqual("Employee");
});

// CODE COMPLETE