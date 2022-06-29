const request = async (place) => {
    const response = await fetch(`/weather?address=${place}`)
    const data = await response.json()

    if (data.error) {
        return console.log(data.error)
    }

    console.log(data.placeName)
    console.log(data.termprature)
    console.log(data.forecast)
    
}
const weatherForm = document.querySelector('form')
const placeInput = document.querySelector('input')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    request(placeInput.value)
})

// request()