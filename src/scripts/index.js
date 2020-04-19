// Queries
import countriesQuery from './queries/countries-query.js';
import countryByCodeQuery from './queries/country-by-code-query.js';
// Templates
import countryListTemplate from './templates/country-list-template.js';
import countryDetailsTemplate from './templates/country-details-template.js';

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

// Get country details a GET request
function getCountryDetailsGET(code) {
  const variables = JSON.stringify({
    code
  });

  return fetch(`${baseURL}?query=${countryByCodeQuery}&variables=${variables}`, {
  }).then((res) => res.json());
}

// Get country details with a POST request
function getCountryDetails(code) {
  return fetch(baseURL, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      query: countryByCodeQuery,
      variables: {
        code
      }
    })
  }).then((res) => res.json());
}

// Expand toggle on click
const clickHandler = async (e) => {
  const listItemElement = e.target.closest('li');

  if (listItemElement.dataset.toggle === 'open') {
    listItemElement.dataset.toggle = 'closed';

    return false;
  }

  // Opening the details, fetch the details
  const detailsSection = listItemElement.querySelector('section');

  // Fetch only if you havent already
  if (!detailsSection.children.length) {
    // Display spinner
    const spinnerElement = document.createElement('span');
    spinnerElement.classList.add('spinner');
    const headline = listItemElement.querySelector('h2');
    headline.appendChild(spinnerElement);
    // Fetch data
    const countryCode = listItemElement.dataset.countryCode;
    const { data } = await getCountryDetails(countryCode);
    // Render details
    detailsSection.innerHTML = countryDetailsTemplate(data.country);
    // Hide spinner
    headline.removeChild(spinnerElement);
  }

  listItemElement.dataset.toggle = 'open';
}

(async function () {
  const { data } = await getCountries();
  const { countries } = data;

  // Countries list
  console.log(countries);

  // Render countries list
  document.querySelector('main').innerHTML = countryListTemplate(countries);

  // Add event listeners
  const countryListItems = document.querySelectorAll('li');

  countryListItems.forEach((countryListItem) => {
    countryListItem.addEventListener('click', clickHandler);
  });
})();
