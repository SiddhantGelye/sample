class Person{
    constructor(name,year,job){
        this.name = name;
        this.year = year;
        this.job = job;
    }
    calculateAge(){
        var age = new Date().getFullYear() - this.year;
        console.log(`the Player name is ${this.name} and ${age} years old`);
    }
}
class Athelete extends Person{
    constructor(name,year,job,olymics, medals){
        super(name,year, job);//it is a peson class with parametres of name , year, and job
        this.olymics = olymics;
        this.medals = medals;
    }
    wonmedals(){
        this.medals++;
        console.log(`another medal won and total medals are ${this.medals}`);
    }
}
const siddhu = new Athelete('siddhu', 1996, 'runner', 5, 16);
siddhu.calculateAge();
siddhu.wonmedals();
