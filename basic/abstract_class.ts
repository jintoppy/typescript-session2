abstract class Animal{
    walk(){
        console.log('animal walking');
    }
    abstract run(): void;
}

class Dog extends Animal {
    constructor(public name: string){
        super();
    }
    bark(){
        console.log(`${this.name} is barking - bow bow`);
    }

    run(){
        console.log(`${this.name} is barking`);
    }
}
const c1 = new Dog('pomeranian');
c1.run();
