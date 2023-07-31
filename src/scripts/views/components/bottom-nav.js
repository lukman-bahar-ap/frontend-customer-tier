class BottomNav extends HTMLElement {
  connectedCallback() {
    // this._badge = '';
    this.render();
  }

  unRender() {
    this.innerHTML = '';
  }

  set withNotif(badge) {
    // this._badge = badge;
    this.render();
  }

  render() {
    // const addBadge = this._badge > 0 ? 'show-mobile-tab-only badge-notif' : '';

    this.innerHTML = `
    <div class="bottom-nav">
        <div class="bottom-link-nav">
            <a href="#/home">
            <span class="material-icons">home</span>
                <div>Home</div>
            </a>
            <a href="#/ukbm">
            <span class="material-icons">assignment</span>
                <div>Nilai</div>
            </a>
            <a href="#/notif">
                 <span class="material-icons" data-badge="1" id="msgSpan">message</span>
                 <div>Pesan</div>
            </a>
        </div>
    </div>`;
  }
}
customElements.define('bottom-nav', BottomNav);
