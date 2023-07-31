/* helper add item to custom element list, and then add item.
example = on custom element file: nilai-list, set list = value  */
const addToList = {
  init(content) {
    const { data, error, element } = content;
    try {
      element.list = data;
      return true;
    } catch {
      return element.renderError(error);
    }
  },
};

export default addToList;
