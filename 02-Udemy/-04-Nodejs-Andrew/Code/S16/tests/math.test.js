const { calcTip, fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../src/math');

test('calcTip', () => {
    const total = calcTip(10, 0.3)
    expect(total).toBe(13)
})

test('Should convert 32 F to 0 C', () => {
    const celsius = fahrenheitToCelsius(32)
    expect(celsius).toBe(0)
})

test('Should convert 0C to 32 F', () => {
    const fahrenheit = celsiusToFahrenheit(0)
    expect(fahrenheit).toBe(32)
})

// test('Should add two numbers', (done) => {
//     add(7, 8).then((sum) => {
//         expect(sum).toBe(15)
//         done()
//     })
// })

// test('Should add two numbers async', async () => {
//     const sum = await add(2, 10)
//     expect(sum).toBe(12)
// })