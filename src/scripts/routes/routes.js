import Home from '../views/pages/home/home';
import BeritaDetail from '../views/pages/berita-detail/berita-detail';

const Routes = {
  '/': Home,
  '/home': Home,
  '/orders/:id': BeritaDetail,
};

export default Routes;
