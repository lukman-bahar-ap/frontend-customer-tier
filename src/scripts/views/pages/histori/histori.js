import './component/histori-list';
import addToList from '../../../utils/add-to-list';
import DataSource from '../../../data/data-source';
import IMG from '../../../globals/assets';

const Histori = {
  async init() {
    this.historiListElement = document.querySelector('histori-list');
    this.mainContent = document.querySelector('#main-content');
  },
  async render() {
    return `
    <div class="timelinepage">
      <section class="timeline">
        <histori-list></histori-list>  
      </section>
    </div>`;
  },

  async afterRender() {
    await this.init();
    await this.loadHistory();
    // this.appbar.classList.add('scrolled');
  },

  async loadHistory() {
    const nilai = await DataSource.list(123);
    if (nilai) {
      const content = {
        data: nilai.orders,
        error: 'Problem loaded data, try again later',
        element: this.historiListElement,
      };
      await addToList.init(content);
    } else {
      this.mainContent.innerHTML = `<img width="100%" src="${IMG.NOT_FOUND}" alt="connection error, try again later">`;
    }
  },

};

export default Histori;
