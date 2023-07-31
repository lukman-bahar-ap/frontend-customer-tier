import API_ENDPOINT from '../globals/api-endpoint';
import API_HELPER from '../globals/api-helper';

class DataSource {
  static async list() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants ? responseJson.restaurants : false;
  }

  static async search(keyword) {
    const response = await fetch(API_ENDPOINT.SEARCH(keyword));
    const responseJson = await response.json();
    return (responseJson.founded > 0) ? responseJson.restaurants : false;
  }

  static async profil(id) {
    const response = await fetch(API_ENDPOINT.CUSTOMER_INFO(id), API_HELPER.optionJson);
    const responseJson = await response.json();
    return responseJson;
  }

  static async sendReview(data) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, API_HELPER.option(data));
    const result = await API_HELPER.check(response);

    if (result.customerReviews) {
      return Promise.resolve(result.customerReviews);
    }

    return Promise.reject(new Error('problem loaded'));
  }
}

export default DataSource;
