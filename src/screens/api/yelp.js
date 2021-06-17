import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',

  headers: {
    Authorization:
      'Bearer _HqeesP5wBHWjET7-A7tsrDbMCSfMKhOkI7aPrri7H0bV0-PgHw-lRN6bIpqWXaT8hWv0ArbZdTJSuJ7lGOWul7dN_bLS9rgceynJ8bEowW4_k1SqbEg52kTxYPIYHYx',
  },
});
