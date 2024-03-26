import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';
import FavoritesPage from '../pages/FavoritesPage';
import { Layout } from './Layout/Layout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          {/* <Route path="catalog/:id" element={<CamperModal />} /> */}
          {/* <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} /> */}
          {/* </Route> */}
          <Route path="/favorites" element={<FavoritesPage />} />

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
