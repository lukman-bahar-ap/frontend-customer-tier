class HistoriItem extends HTMLElement {
  set nilai(data) {
    this._nilai = data;
    console.log(data);
    this.render();
  }

  render() {
    const {
      date, totalInCents,
    } = this._nilai;

    this.innerHTML = `
        <div class="container left">
          <div class="content-box">
            <h2>Date Orders : </h2>
            <h3 class="content-box-item__title">${date}</h3>

              <div class="grid__nilai">
                <div class="right-border">
                  <p><b>Total Spent</b></p>
                </div>   
                <div>
                  <p><b>${totalInCents}</b></p>     
                </div>    
              </div>
          </div>

        </div>`;
  }
}

customElements.define('histori-item', HistoriItem);
