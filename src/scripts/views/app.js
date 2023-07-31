import Routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    open, close, drawer, otherMenu, content, appbar,
  }) {
    this._open = open;
    this._close = close;
    this._drawer = drawer;
    this._otherMenu = otherMenu;
    this._content = content;
    this._appbar = appbar;

    this.initialAppShell();
  }

  initialAppShell() {
    DrawerInitiator.init({
      open: this._open,
      close: this._close,
      drawer: this._drawer,
      otherMenu: this._otherMenu,
      content: this._content,
    });
  }

  async transactionPage(page) {
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }

  async transparentAppBar(url) {
    window.scrollTo(0, 0);

    if (url === '/home' || url === '/') {
      if (document.querySelector('.scrolled') !== null) {
        this._appbar.classList.remove('scrolled');
      }
    } else if (document.querySelector('.scrolled') === null) {
      this._appbar.classList.add('scrolled');
    }
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = Routes[url];
    if (page !== undefined) {
      this.transactionPage(page);
      this.transparentAppBar(url);
    }
  }

  async renderPageWithoutUrl(url) {
    const page = Routes[url];
    if (page !== undefined) {
      this.transactionPage(page);
      this.transparentAppBar(url);
    }
  }
}

export default App;
