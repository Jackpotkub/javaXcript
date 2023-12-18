class Dog {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log("This is " + this.name + " !");
    }

    // A static method
    static bark() {
        console.log("Woof!");
    }
}

const myDog = new Dog("Buster");
myDog.introduce();

// Call the static method
Dog.bark();