import './component/hero-elm';
import './component/dashboard-card';
import '../../components/berita-list';
import '../../components/ukbm-list';
import '../../components/ukbm-item-skeleton';
import '../../components/notif-red-elm';
import '../../components/notif-absen-elm';
import DataSource from '../../../data/data-source';

const Home = {
  async init() {
    this.dashboardElement = document.querySelector('dashboard-card');
    this.ukbmListElement = document.querySelector('ukbm-list');
    this.beritaListElement = document.querySelector('berita-list');
    this.mainContent = document.querySelector('#main-content');
    this.heroElement = document.querySelector('hero-elm');
    this.notifElement = document.querySelector('notif-red-elm');
    this.absenElement = document.querySelector('notif-absen-elm');
    this.msgSpan = document.getElementById('msgSpan');
  },

  async render() {
    return `
    <hero-elm></hero-elm>
    <section class="content">
        <dashboard-card></dashboard-card>
    </section>
      `;
  },

  async afterRender() {
    await this.init();
    /* load 1. dashboard, 2.ukbm (save), 3.pencapaian (save) 4. berita */
    this.resetDashboard();
    await this.loadContent();
  },

  async loadContent() {
    // request profil data (terutama id siswa dan id KRS)
    const profil = await DataSource.profil(123);
    if (profil.status === 200) {
      const {
        customerName,
        currentTier,
        startDateOfTierCalculation,
        amountSpentSinceStartDate,
        amountToReachnextTier,
        nextYearDowngradeTier,
        downgradeDate,
        amountToAvoidDowngrade,
      } = profil.data;

      /* show customer tier info */
      this.heroElement.dashboard = {
        customerName,
        currentTier,
        startDateOfTierCalculation,
        downgradeDate,
        amountSpentSinceStartDate,
        amountToReachnextTier,
      };

      const dashboard = {
        amountSpentSinceStartDate,
        amountToReachnextTier,
        amountToAvoidDowngrade,
        downgradeDate,
        nextYearDowngradeTier,
      };
      await this.loadDashboard(dashboard);
    } else {
      this.heroElement.dashboard = {
        customerName: '-', totalSpent: 0, currentTier: 'Bronze', startDateOfTierCalculation: '-', downgradeDate: '-',
      };
    }
  },

  async loadDashboard(result) {
    this.dashboardElement.setDataDashboard = result;
  },

  resetDashboard() {
    const dashboard = {
      amountSpentSinceStartDate: 0,
      amountToReachnextTier: 0,
      amountToAvoidDowngrade: 0,
      downgradeDate: '-',
      nextYearDowngradeTier: 0,
    };
    this.dashboardElement.setDataDashboard = dashboard;
  },

};

export default Home;
