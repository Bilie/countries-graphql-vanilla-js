const countryItemTemplate = (country) => {
  return `
      <li data-toggle="closed" data-country-code="${country.code}" class="list-item">
        <h2 class="list-item__headline"><span class="list-item__icon">${country.emoji}</span>${country.name}</h2>
        <section class="list-item__content"></section>
      </li>
    `;
}

export default countryItemTemplate;