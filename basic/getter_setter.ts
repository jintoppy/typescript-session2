class Employee {
    private firstName: string;
    private lastName: string;
    constructor(){}

    set fullName(name: string) {
        const names = name.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }

    get fullName(){
        return this.firstName + '_' + this.lastName;
    }


}

const emp = new Employee();
emp.fullName = 'Jinto Jose';

console.log(emp.fullName);

