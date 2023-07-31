class NotifAbsenElement extends HTMLElement {
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  set notif(notif) {
    this._notif = notif;
    this.render();
  }

  render() {
    const {
      BODY, FOOTER, STATUS_KEHADIRAN, JAM_PULANG, JAM_DATANG,
    } = this._notif;

    let cardColor = 'oren';
    if (STATUS_KEHADIRAN === 'Hadir') {
      cardColor = 'green';
    } else if (STATUS_KEHADIRAN === 'Alpha') {
      cardColor = 'red';
    }
    if (JAM_PULANG !== '') {
      cardColor = 'blue';
    }
    this.innerHTML = `
    <section class="content">
      <div class="absen-item__content_${cardColor}">
        <div class="absen-grid">
          <div class="absen-item__icon">
            <i class="material-icons">alarm</i>
            <br>
            &nbsp;<span>${JAM_DATANG}</span>
          </div>
          <div>
            <h3 class="absen-item__title">
              <a href="/#" aria-label="klik untuk melihat detail">
              ${BODY}
              </a>
            </h3>
            <p class="absen-item__footer">
            ${`${FOOTER}`}
            </p>
          </div>
        </div>
      </div>
    </section>`;

    // this.querySelector('#cardAbsenClick').addEventListener('click', this._clickEvent);
  }
}
customElements.define('notif-absen-elm', NotifAbsenElement);
