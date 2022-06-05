//* Synchronous request => From requests.js

const getPuzzleSync = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "https://puzzle.mead.io/puzzle?wordCount=3", false);
  request.send();

  if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText);
    return data.puzzle;
  } else if (request.readyState === 4) {
    throw new Error("An error has take a place");
  }
};

//? Caling the Synchronous request => from app.js

const puzzle = getPuzzleSync();
console.log(puzzle);

//**XML request => From requests.js*/

const getPuzzle = (wordCount) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data.puzzle);
      } else if (request.readyState === 4) {
        reject("An error has take a place");
      }
    });

    request.open("GET", `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
  });
};

const getCountry = (countryCode) => {
  return new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest();

    const countyCode = countryCode;
    countryRequest.onreadystatechange = () => {
      if (countryRequest.readyState === 4 && countryRequest.status === 200) {
        const data = JSON.parse(countryRequest.responseText);
        const country = data.find(
          (country) =>
            country.alpha2Code.toLowerCase() === countyCode.toLowerCase()
        );
        resolve(country);
      } else if (countryRequest.status === 4) {
        reject("An error has take a place");
      }
    };
    countryRequest.open("GET", "https://restcountries.com/v2/all");
    countryRequest.send();
  });
};

//**Fetch API => From app.js*/

fetch("https://puzzle.mead.io/puzzle", {}).then((response) => {
  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('Unable to fetch the puzzle')
  }
}).then((data) => {
  console.log(data.puzzle)
}).catch((error) => {
  console.log(error)
})

//**Fetch API request => request API */

const getPuzzleOld = (wordCount) => {
  return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('An error has take a place')
    }
  }).then((data) => data.puzzle)
};

const getCountryOld = (countryCode) => {
  return fetch('https://restcountries.com/v2/all', {}).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch data')
    }
  }).then((country) => {
    return country.find((country) => country.alpha2Code.toLowerCase() === countryCode.toLowerCase());
  }).then((country) => country.name)
}

const getLocation = () => {
  return fetch('https://ipinfo.io/json?token=d60769a1896209', {}).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Enable to fetch data')
    }
  })
}


//**Get Country & Get Location => from Requests.js */

const getCountryNew = async (countryCode) => {
  const response = await fetch('https://restcountries.com/v2/all', {})

  if (response.status === 200) {
    const countries = await response.json()
    const country = countries.find((country) => country.alpha2Code.toLowerCase() === countryCode.toLowerCase())
    return country.name
  } else {
    throw new Error('Unable to get data')
  }
}

const getLocationNew = async () => {
  const response = await fetch('https://ipinfo.io/json?token=d60769a1896209', {})

  if (response.status == 200) {
    return await response.json()
  } else {
    throw new Error('Unable to get data')
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation()
  const country = await getCountry(location.country)
  return country
}

//**Get Country & Get Location => from app.js */

getCountry("EG").then(
  (country) => {
    console.log(`Country Name: ${country}`);
  },
).catch((error) => {
  console.log(error)
})

getLocation().then((location) => {
  console.log(`${location.city}, ${location.region}, ${location.country}`)
}).catch((error) => {
  console.log(error)
})

getLocation().then((location) => {
  return getCountry(location.country)
}).then((country) => {
  console.log(country)
}).catch((error) => {
  console.log(error)
})

getCurrentCountry().then((country) => {
  console.log(`Current country : ${country}`)
}).catch((error) => {
  console.log(error)
})