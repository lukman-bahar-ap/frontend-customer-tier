import CONFIG from './config';

const API_ENDPOINT = {
  SEARCH: (keyword) => `${CONFIG.BASE_URL}search?q=${keyword}`,
  CUSTOMER_INFO: (id) => `${CONFIG.BASE_URL}customers/${id}`,
  LIST_ORDER: (id) => `${CONFIG.BASE_URL}orders/${id}`,
};

export default API_ENDPOINT;
