import './views/components/app-bar';
import '../styles/main.scss';
import '../styles/hero.scss';
import '../styles/progressbar.scss';
import '../styles/bottom-nav.scss';
import '../styles/circle.scss';
import '../styles/timeline.scss';
import '../styles/form.scss';

import transparentAppbar from './utils/scrolled';
import App from './views/app';
import DrawerInitiator from './utils/drawer-initiator';

const Main = () => {
  const app = new App({
    open: document.querySelector('#drawer-open'),
    close: document.querySelector('#drawer-close'),
    drawer: document.querySelector('#drawer'),
    otherMenu: document.querySelector('#bottomnav'),
    content: document.querySelector('#main-content'),
    appbar: document.querySelector('.appbar'),
  });
  app.renderPage();

  // call routes on event url haschange
  const drawer = document.querySelector('#drawer');
  window.addEventListener('hashchange', (event) => {
    DrawerInitiator._closeDrawer(event, drawer);
    app.renderPage();
  });

  window.addEventListener('scroll', () => {
    transparentAppbar();
  });
};

export default Main;
