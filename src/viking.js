// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
        // this.health= health;
        // this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }else{
            return `${this.name} has died in act of combat`
        }
        
    }
    battleCry(){
        return "Odin Owns You All!"
    }
    
}


// Saxon
class Saxon extends Soldier{
    constructor(health,strength){
        super(health, strength)
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }else{
            return `A Saxon has died in combat`
        }
        
    }
}

// War
class War {

    vikingArmy =[];
    saxonArmy =[];
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]

        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

        let fight = randomSaxon.receiveDamage(randomViking.strength);
        
        if(randomSaxon.health <=0 ){
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon,1))
        }
        return fight
    }
    saxonAttack(){
        
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]

        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

        let fight = randomViking.receiveDamage(randomSaxon.strength);
        
        if(randomViking.health <=0 ){
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking,1))
        }
        return fight
    }


}

