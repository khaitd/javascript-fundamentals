const laptop = {
    price: 1000,
    brand: 'HP',
    memory: "2GB",
    color: 'pink',
}
const car = {
    engine: 'VB',
    doors: 2,
    model: 'BMW',
    price: 200000,
    make: 'M4'
}
const company = {
    name: 'Vittles',
    ceo: 'Micheal Law',
    isTheBest: true,
    publicTraded: false,
}
const room = {
    windows: 0,
    dimensions: '200x200',
    closet: false,
    isLegal: false,
    pets: false
}

const item = {
    name: 'Excalibur',
    attackPower: 130 + Infinity,

}

const ally = {
    name: 'Geralt',
    power: {name: "kamehameha", attackPower: 9000}
}

const character = {
    hairColor: 'blue',
    height: "6'7",
    race: "Elf",
    gender: null,
    strength: Infinity,
    dlc: false,
    class: 'Mage',
    cohort: '031422',
    item: item,
    ally: ally

}

console.log(character.ally.power.attackPower)