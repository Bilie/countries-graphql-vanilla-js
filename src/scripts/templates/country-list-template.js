import countryItemTemplate from './country-item-template.js';

const countryListTemplate = (coutriesList) => {
  const listItems = coutriesList.map(
    (country) => countryItemTemplate(country)
  ).join('');
  const ul = `
    <ul>
      ${listItems}
    </ul>
  `;

  return ul;
}

export default countryListTemplate;