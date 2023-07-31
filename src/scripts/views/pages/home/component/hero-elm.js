import IMG from '../../../../globals/assets';

class HeroElement extends HTMLElement {
  connectedCallback() {
    this._dashboard = {
      customerName: '-',
      currentTier: 'Bronze',
      startDateOfTierCalculation: '-',
      downgradeDate: '-',
      amountSpentSinceStartDate: '-',
      amountToReachnextTier: '-',
    };
    this.render();
  }

  set dashboard(dashboard) {
    this._dashboard = dashboard;
    this.render();
  }

  _calculatePresentase(current, target) {
    this.isDone = (current >= target - current);
    this.target = this.isDone ? 100 : current + target;
    this.current = current;

    const PROGRESS_BAR = (this.target > 0 || this.current > 0)
      ? ((this.target / this.current) * 100) : 0;
    // CHECK IF DECIMAL THEN USE 1 NUMBER DECIMAL, EXAMPLE = 33.3
    return (PROGRESS_BAR % 1 !== 0 || PROGRESS_BAR !== 0) ? PROGRESS_BAR.toFixed(1) : PROGRESS_BAR;
  }

  _addClassProgress(value) {
    this.value = value;
    if (this.value !== 0) {
      return (this.value >= 100) ? 'w3-finish' : 'w3-oren';
    }
    return '';
  }

  _tierImage(tierName) {
    this.tier = {
      Bronze: IMG.TIER_BRONZE,
      Silver: IMG.TIER_SILVER,
      Gold: IMG.TIER_GOLD,
    };
    console.log(this.tier[tierName]);
    return this.tier[tierName];
  }

  render() {
    const {
      customerName,
      currentTier,
      startDateOfTierCalculation,
      downgradeDate,
      amountSpentSinceStartDate,
      amountToReachnextTier,
    } = this._dashboard;

    const PROGRESS_BAR = this._calculatePresentase(
      amountSpentSinceStartDate, amountToReachnextTier,
    );
    const CLASS_PROGRESS_BAR = this._addClassProgress(PROGRESS_BAR);

    this.innerHTML = `
    <div class="hero-item">
      <img class="hero-item__thumbnail lazyload"
      data-src="${IMG.HERO}"
      alt="hero picture" crossorigin="anonymous">
      <div class="hero-item__card-img"></div>
      
      <div class="hero-item__content">
          <div class="hero-item__title">
              ${customerName}
              <p class="hero-item__description">This year Spent : $ ${amountSpentSinceStartDate}</p>
              <p class="hero-item__description">Tier : ${currentTier}</p>
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container ${CLASS_PROGRESS_BAR} w3-round-xlarge" style="width:${PROGRESS_BAR}%;">
                    ${PROGRESS_BAR}%
                </div>
              </div>
          </div>
          <div class="hero-item__progress">

            <div>
              <p><b>Start Tier Calculation</b></p> 
              <p>Start Date of Spent : ${startDateOfTierCalculation} </p>
              <p>Expired Tier Until : ${downgradeDate} </p>
            </div>
            <div style="align: right !important; padding-right: 16px;">
              <img width="120px" src="${this._tierImage(currentTier)}" alt="${currentTier}">
            </div>

          </div>
      </div>
    </div>`;
  }
}
customElements.define('hero-elm', HeroElement);
