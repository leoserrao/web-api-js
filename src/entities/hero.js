class Hero {
    constructor({ id, name, age, power }) {
        this.id = id
        this.name = name
        this.age = age
        this.power = power
    }
    isValid() {
        const propertyNames = Object.getOwnPropertyNames(this)
        console.log('propertyNames', propertyNames)
    }
}

module.exports = Hero

const hero = new Hero({ id: 2, name: "Chapolin", age: 80, power: "weakness"})
console.log('valid', hero.isValid())