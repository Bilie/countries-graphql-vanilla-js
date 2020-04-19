// Queries
import countriesQuery from './queries/countries-query.js';

// Get countries with a POST request
function getCountries() {
    return fetch('https://countries.trevorblades.com/', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            query: countriesQuery,
        })
    }).then((res) => res.json());
}

// Get countries with a GET request
function getCountriesGET() {
    return fetch(`https://countries.trevorblades.com/?query=${countriesQuery}`, {
    }).then((res) => res.json());
}

(async function () {
    const { data } = await getCountries();
    const { countries } = data;

    // Countries list
    console.log(countries);
})();
