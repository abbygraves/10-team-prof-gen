const Employee = require('../lib/Employee');
const employee = new Employee("John Doe", "111", "johndoe@email.com");

// EMPLOYEE OBJECT TEST
test("creates an employee object", () => {
  expect(employee.name).toBe("John");
  expect(employee.id).toBe("111");
  expect(employee.email).toBe("johndoe@email.com");
});


// TEST TO GET NAME
test("check if getName() returns name", () => {
  expect(employee.getName()).toBe("John Doe");
});


// TEST TO GET ID
test("check if getId() returns ID", () => {
  expect(employee.getId).toBe("111");
});


// TEST TO GET EMAIL
test("check if getEmail() returns email address", () => {
  expect(employee.getEmail).toBe("johndoe@email.com");
});


// TEST TO GET ROLE
test("check if getRole() returns role", () => {
  expect(employee.getRole).toBe("Employee");
});






// expect(employee.).toBe("");