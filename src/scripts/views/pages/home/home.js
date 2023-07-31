import './component/hero-elm';
import './component/dashboard-card';
import DataSource from '../../../data/data-source';

const Home = {
  async init() {
    this.dashboardElement = document.querySelector('dashboard-card');
    this.mainContent = document.querySelector('#main-content');
    this.heroElement = document.querySelector('hero-elm');
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
    this.resetDashboard();
    await this.loadContent();
  },

  async loadContent() {
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
        daysToDowngradeTier: this.calculateDays(downgradeDate),
        nextYearDowngradeTier,
      };
      await this.loadDashboard(dashboard);
    } else {
      this.heroElement.dashboard = {
        customerName: '-', totalSpent: 0, currentTier: 'Bronze', startDateOfTierCalculation: '-', downgradeDate: '-',
      };
    }
  },

  calculateDays(nextYearDowngradeTier) {
    const startDate = new Date();
    const splitDate = nextYearDowngradeTier.toString().split('-');
    const endDate = new Date(splitDate[0], splitDate[1], splitDate[2]);

    const difference = endDate.getTime() - startDate.getTime();
    const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  },

  async loadDashboard(result) {
    this.dashboardElement.setDataDashboard = result;
  },

  resetDashboard() {
    const dashboard = {
      amountSpentSinceStartDate: 0,
      amountToReachnextTier: 0,
      amountToAvoidDowngrade: 0,
      daysToDowngradeTier: '-',
      nextYearDowngradeTier: 0,
    };
    this.dashboardElement.setDataDashboard = dashboard;
  },

};

export default Home;
