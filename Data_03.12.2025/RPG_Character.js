class Character {
    constructor(name, hp) {
        if (new.target == Character) {
            throw new Error("Error: Character");
        }
        this.name = name;
        this.hp = hp;
    }
    attack (target) {
        console.log(`--${this.name}-- attacks --${target.name}--`); 
    }

    defend (damage) {
        this.hp -= damage;
        console.log(`name--> --${this.name}-- damage--> --${damage}-- HP --> --${this.hp}--`);
    }

    isAlive () {
        return this.hp > 0;
    }
}

class Warrior extends Character {
    constructor(name, hp, strength) {
        super(name, hp);
        this.strength = strength;
    }   
    attack(target) {
        console.log(`--${this.name}-- strikes--> --${target.name}-- strength--> --${this.strength}-- `);
        target.defend(this.strength);
    }
}

class Mage extends Character {
    constructor(name, hp, mage) {
        super(name, hp);
        this.mage = mage;
    }
    attack(target) {
        const hit = this.mage * 2;
        console.log(`--${this.name}-- casts a spell on --${target.name}-- dealing --${hit}-- damage`);
        target.defend(hit);
        this.mage -= 10;
    }
}   

class Archer extends Character {
    constructor(name, hp, agility) {
        super(name, hp);
        this.agility = agility;
    }
    attack(target) {
        const arrowDamage = this.agility * 1.5;
        console.log(`${this.name} shoots an arrow at ${target.name} dealing ${arrowDamage} damage`);
        target.defend(arrowDamage);
    }
}

const warrior = new Warrior("Harry Potter", 100, 15);
const mage = new Mage("Tom Reddle", 80, 30);
const archer = new Archer("Severus Snape", 90, 20);

warrior.attack(mage);
mage.attack(warrior);
archer.attack(warrior);