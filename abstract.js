var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* abstract class */
var Department = (function () {
    function Department(nameDepartment) {
        this.strNameDepartment = nameDepartment;
    }
    Department.prototype.printName = function () {
        return ("The " + this.strNameDepartment + " is on floor " + Math.floor(Math.random() * 10) + ".");
    };
    return Department;
}());
/* Accounting department */
var accountDepartment = (function (_super) {
    __extends(accountDepartment, _super);
    function accountDepartment() {
        return _super.call(this, "Accounting Department") || this;
    }
    accountDepartment.prototype.printMeeting = function () {
        return ("Next meeting of " + this.strNameDepartment + " is on Monday.");
    };
    return accountDepartment;
}(Department));
/* Sales department */
var salesDepartment = (function (_super) {
    __extends(salesDepartment, _super);
    function salesDepartment() {
        return _super.call(this, "Sales Department") || this;
    }
    salesDepartment.prototype.printMeeting = function () {
        return ("Next meeting of " + this.strNameDepartment + " is on Friday.");
    };
    return salesDepartment;
}(Department));
/* Account Department class */
var accountDepartmentClass = new accountDepartment();
/* Sales Department class */
var salesDepartmentClass = new salesDepartment();
/* Information of Departments */
function DepartmentInfo() {
    document.getElementById("lblMessage1").innerHTML = accountDepartmentClass.printName() + " - " + accountDepartmentClass.printMeeting();
    document.getElementById("lblMessage2").innerHTML = salesDepartmentClass.printName() + " - " + salesDepartmentClass.printMeeting();
}
