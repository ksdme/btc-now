export default class FetchPrice {

  static getCurrent() {
    return fetch('https://api.coindesk.com/v1/bpi/currentprice/btc.json')
      .then((result) => result.json())
      .then((json) => json.bpi.USD)
      .then((rate) => rate.rate_float);
  }

}
