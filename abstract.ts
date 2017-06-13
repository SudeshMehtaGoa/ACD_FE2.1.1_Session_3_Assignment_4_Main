/* abstract class */
abstract class Department {
    public strNameDepartment : string;

    constructor(nameDepartment:string)
    {
        this.strNameDepartment=nameDepartment;
    }
    public printName():string
    {
        return(`The ${this.strNameDepartment} is on floor ${Math.floor(Math.random() * 10)}.`);
    }
    /* abstract method */
    abstract printMeeting():string
}

/* Accounting department */
class accountDepartment extends Department {
    constructor()
    {
        super("Accounting Department");
    }
    public printMeeting():string
    {
        return(`Next meeting of ${this.strNameDepartment} is on Monday.`);
    }
}

/* Sales department */
class salesDepartment extends Department {
    constructor()
    {
        super("Sales Department");
    }
    public printMeeting():string
    {
        return(`Next meeting of ${this.strNameDepartment} is on Friday.`);
    }
}


/* Account Department class */
var accountDepartmentClass : accountDepartment = new accountDepartment();

/* Sales Department class */
var salesDepartmentClass : salesDepartment = new salesDepartment();

/* Information of Departments */
function DepartmentInfo()
{
    (<HTMLInputElement>document.getElementById("lblMessage1")).innerHTML = `${accountDepartmentClass.printName()} - ${accountDepartmentClass.printMeeting()}`;
    (<HTMLInputElement>document.getElementById("lblMessage2")).innerHTML = `${salesDepartmentClass.printName()} - ${salesDepartmentClass.printMeeting()}`;
}  
