// Queries
import countriesQuery from './queries/countries-query.js';
// Templates
import countryListTemplate from './templates/country-list-template.js';

const baseURL = 'https://countries.trevorblades.com/';

// Get countries with a POST request
function getCountries() {
    return fetch(baseURL, {
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
    return fetch(`${baseURL}?query=${countriesQuery}`, {
    }).then((res) => res.json());
}

(async function () {
    const { data } = await getCountries();
    const { countries } = data;

    // Render countries list
    document.querySelector('main').appendChild(countryListTemplate(countries));

    // Countries list
    console.log(countries);
})();
