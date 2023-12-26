class Hero {
    constructor(name, age, type) {
    this.name = name
    this.age = age
    this.type = type
}

attack() {
let typeAttack 
    switch (this.type) {
        case "Mago":
            typeAttack = "magia"
            break;
    
            case "Guerreiro":
            typeAttack = "espada"
            break;
    
            case "Monge":
            typeAttack = "artes marciais"
            break;

            case "Ninja":
            typeAttack = "shuriken"
            break;
    }
    console.log(`o ${this.type} atacou usando ${typeAttack}`)
}
}

const hero1 = new Hero("Mário", 45, "Guerreiro")
hero1.attack()

const hero2 = new Hero("Goku", 35, "Guerreiro")
hero2.attack()

const hero3 = new Hero("Aang", 12, "Monge")
hero3.attack()