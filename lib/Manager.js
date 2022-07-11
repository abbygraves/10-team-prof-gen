const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  // Do I need this or will it make "Manager" show twice or something??
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
