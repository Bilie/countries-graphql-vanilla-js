const countryItemTemplate = (country) => {
  return `
      <li data-country-code="${country.code}" class="list-item">
        <h2 class="list-item__headline"><span class="list-item__icon">${country.emoji}</span>${country.name}</h2>
      </li>
    `;
}

export default countryItemTemplate;