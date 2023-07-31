import IMG from '../../../../globals/assets';

class dashboardCard extends HTMLElement {
  connectedCallback() {
    this._dashboard = {
      amountSpentSinceStartDate: 0,
      amountToReachnextTier: 0,
      amountToAvoidDowngrade: 0,
      daysToDowngradeTier: '-',
      nextYearDowngradeTier: 0,
    };
    this.render();
  }

  set setDataDashboard(dashboard) {
    this._dashboard = dashboard;
    this.render();
  }

  render() {
    const {
      amountSpentSinceStartDate,
      amountToReachnextTier,
      amountToAvoidDowngrade,
      daysToDowngradeTier,
      nextYearDowngradeTier,
    } = this._dashboard;

    this.innerHTML = `
            <h2 class="category__title">Dashboard</h2>
            <div class="card-horizontal">
                <button type="button" class="category-item bg-gradient-primary" 
                    id="ShowAll" 
                    title="Dashboard"
                    aria-label="Click Dashboard">

                        <img src="${IMG.CIRCLE}" class="card-img-absolute" alt="">
                        <div class="category__content">
                            Amount Spent
                        </div>
                        <div class="category__value">${amountSpentSinceStartDate}</div>
                        <div class="category__content">Since this years</div>

                </button>
                <button type="button" class="category-item bg-gradient-secondary" 
                    id="ShowMaxtRate" 
                    title="amount To Reach"
                    aria-label="Click Dashboard">

                        <img src="${IMG.CIRCLE}" class="card-img-absolute" alt="">
                        <div class="category__content">
                        Target Amount 
                        </div>
                        <div class="category__value">${amountToReachnextTier}</div>
                        <div class="category__content">To Next Tier</div>

                </button>
                <button type="button" class="category-item bg-gradient-third" 
                    id="ShowAverage" 
                    title="amount To Avoid Downgrade"
                    aria-label="Click Dashboard">

                        <img src="${IMG.CIRCLE}" class="card-img-absolute" alt="">
                        <div class="category__content">
                        Target Keep
                        </div>
                        <div class="category__value">${amountToAvoidDowngrade}</div>
                        <div class="category__content">Avoid Downgrade</div>

                </button>
                <button type="button" class="category-item bg-gradient-fourth" 
                    id="ShowFavorite"
                    title="downgrade Date"
                    aria-label="Click Dashboard">

                        <img src="${IMG.CIRCLE}" class="card-img-absolute" alt="">
                        <div class="category__content">
                          Expire in
                        </div>
                        <div class="category__value">${daysToDowngradeTier}</div>
                        <div class="category__content">Days</div>

                </button>
                <button type="button" class="category-item bg-gradient-fiveth" 
                    id="ShowAllCity" 
                    title="next Year Downgrade Tier"
                    aria-label="Click Dashboard">

                        <img src="${IMG.CIRCLE}" class="card-img-absolute" alt="">
                        <div class="category__content">
                          Next year amount
                        </div>
                        <div class="category__value">${nextYearDowngradeTier === null ? 0 : nextYearDowngradeTier}</div>
                        <div class="category__content">To Downgrade Tier</div>

                </button>
            </div>
        `;
  }
}

customElements.define('dashboard-card', dashboardCard);
