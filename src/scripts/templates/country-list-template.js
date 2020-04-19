import countryItemTemplate from './country-item-template.js';

const countryListTemplate = (coutriesList) => {
  const ul = document.createElement('ul');
  ul.classList.add('list');
  const listItems = coutriesList.map(
    (country) => countryItemTemplate(country)
  ).join('');

  ul.innerHTML = listItems;

  return ul;
}

export default countryListTemplate;