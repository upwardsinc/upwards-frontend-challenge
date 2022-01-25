import { polyfill } from "es6-promise";
polyfill();

class DataFactory {
  // TODO: fetch data from `https://itunes.apple.com/us/rss/topalbums/limit=100/json`
  getHits() {
    return new Promise((resolve, reject) => {
      resolve({});
    });
  }
}

export default DataFactory;
