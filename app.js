/*jshint esversion: 6 */
class Person{
    #id
    #name
    constructor(id,name) {
        this.#id=id
        this.#name=name}
    getId(){
        return this.#id }
    getName(){
        return this.#name }
    toString(){
        return `id :${this.#id}  name:${this.#name}` }
}

class Child extends Person{
    #kindergarden
    constructor(id,name,kindergarden) {
        super(id,name);
        this.#kindergarden=kindergarden
    }
    getKinderGarden(){
        return this.#kindergarden
    }
    toString() {
        return super.toString() + `  kindergarden: ${this.#kindergarden}`;
    }
}
class Employee extends Person{
    #salary
    constructor(id,name,salary) {
        super(id,name);
        this.#salary=salary
    }
    getSalary(){
        return this.#salary
    }
    computeSalary(){
return this.#salary
    }
    toString() {
    return super.toString() + `  salary: ${this.computeSalary()}`;
}
}

class wageEmployee extends Employee{
    #hours
    #wage
    constructor(id,name, salary,hours,wage) {
        super(id,name,salary);
        this.#hours=hours
        this.#wage=wage
    }
    getHours(){
        return this.#hours
    }
    getWage(){
        return this.#wage
    }
    computeSalary() {
        return super.computeSalary()+ this.#hours*this.#wage;
    }
}
const persons=[
    new Child(100, 'Olya', 'Shalom'),
    new Child(101, 'Sergey', 'Boker'),
    new Child(102, 'Kolya', 'Shalom'),
    new Employee(103, 'Vasya', 1000),
    new wageEmployee(104, 'Tolya', 1000, 10, 100)
]
/////////////11111///////////////////////
function  countOfPersonType(persons, type){
    return resAray= persons.filter(el=>el.constructor.name===type).length
}
const typeWage=countOfPersonType(persons,'wageEmployee')
console.log(typeWage)
///////////////2///////////////
    function computeSalaryBudget(persons){
   // return persons.reduce((total,salary)=> total+=salary.computeSalary() ,0)
       return persons.reduce((res, cur) => res += cur.computeSalary ? cur.computeSalary() : 0 , 0);
    }
const computeSBudget=computeSalaryBudget(persons)
console.log(computeSBudget)

/////////3/////////////////
function countChildrenKindergarden(persons, kinderGardenName) {
    return persons.filter(n => n.getKinderGarden && n.getKinderGarden() === kinderGardenName ).length

}
const garden=countChildrenKindergarden(persons,'Shalom')
console.log(garden)
