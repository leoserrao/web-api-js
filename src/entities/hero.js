class Hero {
    constructor({ id, name, age, power }) {
        this.id = id
        this.name = name
        this.age = age
        this.power = power
    }
    isValid() {
        const propertyNames = Object.getOwnPropertyNames(this)
        const amountInvalid = propertyNames
            .map(property => (!!this[property]) ? null : `${property} is missing!`)
            .filter(item => !!item)

        console.log('amountInvalid', amountInvalid)
    }
}

module.exports = Hero

const hero = new Hero({ id: 2, name: "Chapolin", age: 80, power: "weakness"})
console.log('valid', hero.isValid())