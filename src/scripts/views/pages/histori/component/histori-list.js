import './histori-item';

class HistoriList extends HTMLElement {
  set list(list) {
    this._nilai = list;
    console.log(list);
    this.render();
  }

  renderError(message) {
    this.innerHTML = `<h3>${message}</h3>`;
  }

  render() {
    this.innerHTML = '';
    this._nilai.forEach((n) => {
      const nilaiItemElement = document.createElement('histori-item');
      nilaiItemElement.nilai = n;
      console.log(n);
      this.appendChild(nilaiItemElement);
    });
  }
}

customElements.define('histori-list', HistoriList);
