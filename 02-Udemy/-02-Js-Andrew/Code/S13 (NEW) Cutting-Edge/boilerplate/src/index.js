// import square, { add, name } from './utilites'
// import scream from './scream'

// console.log('index.js')
// console.log(add(3, 5))
// console.log(scream(name))
// console.log(square(2))

//*The rest parameter
const calcAvg = (thing, ...nums) => {
    // return (numOne + numTwo) / 2
    let sum = 0
    nums.forEach((num) => sum += num)
    const avg = sum / nums.length
    return `The average ${thing} is ${avg}`
}

console.log(calcAvg('grade', 0, 100, 100, 50))

const printTeam = (teamName, coach, ...players) => {
    return `
    Team: ${teamName}
    Coach: ${coach} 
    Players: ${players.join(', ')}`
}
console.log(printTeam('Barcelona', 'Xavi', 'De jong', 'Debay', 'Stegen', 'Arajo'))

//*The spread Syntax
const team = {
    name: 'Barcelona',
    coach: 'Xavi',
    players: ['De jong', 'Debay', 'Stegen', 'Arajo']
}
console.log(printTeam(team.name, team.coach, ...team.players))

const cities = ['Amsterdam', 'London', 'Barcelona']
const citiesCopy = [...cities, 'Alexandria']
citiesCopy.push('cairo')

console.log(cities)
console.log(citiesCopy)

//* object spread operator

let house = {
    bedrooms: 3,
    bathrooms: 2,
    yearBuild: 2019
}

let houseCopy = {
    ...house,
    kitchens: 2
}

console.log(houseCopy)

const person = {
    name: 'Body',
    age: 16
}
const location = {
    city: 'Amsterdam',
    country: 'NL'
}

let overView = {
    ...person,
    ...location
}

console.log(overView)

//* destructuring

const todo = {
    id: '12kdlsffffffffek',
    text: 'WOW',
    nothing: 'nothing'
}

const printTodo = ({ id, text }) => {
    console.log(`${id}: ${text}`)
}

printTodo(todo)

const { id: newID, text, comp = false, ...other } = todo

console.log(newID, comp, other)

const age = [13, 16, 37, 85]
const [a, , b, , unde = 12, ...others] = age
console.log(unde)
