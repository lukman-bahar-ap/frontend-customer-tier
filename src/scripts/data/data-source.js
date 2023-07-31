import API_ENDPOINT from '../globals/api-endpoint';
import API_HELPER from '../globals/api-helper';

class DataSource {
  static async list(id) {
    const response = await fetch(API_ENDPOINT.LIST_ORDER(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async profil(id) {
    const response = await fetch(API_ENDPOINT.CUSTOMER_INFO(id), API_HELPER.optionJson);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default DataSource;
