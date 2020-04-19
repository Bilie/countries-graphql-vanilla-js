const countryDetailsTemplate = (country) => {
  return `
    <p><label class="list-item__label">Capital:</label> ${country.capital ? country.capital : 'N/A'}</p>
    <p><label class="list-item__label">Currency:</label> ${country.currency ? country.currency : 'N/A'}</p>
    <p><label class="list-item__label">Located in:</label> ${country.continent.name}</p>
    <p><label class="list-item__label">Language(s):</label> ${
    country.languages.length ?
      country.languages.map(lang => lang.name).join(', ') :
      'N/A'
    }</p>
  `;
};

export default countryDetailsTemplate;