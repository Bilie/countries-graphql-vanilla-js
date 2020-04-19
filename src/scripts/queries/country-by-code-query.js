const countryByCodeQuery = `
  query getCountry($code: ID!) {
    country(code: $code) {
      name
      continent {
        name
      }
      capital
      currency
      languages {
        name
      }
      states {
        name
      }
    }
  }
`;

export default countryByCodeQuery;