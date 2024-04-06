import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from './pages/entry/Entry';
import GlobalStyles from './styles/globalStyles';
import ActiveSubs from './pages/activeSubs/ActiveSubs';
import Onboarding from './pages/onboarding/Onboarding';
import Promocodes from './pages/promos/Promocodes';
import Expenses from './pages/expenses/Expenses';
import Management from './pages/management/Management';
import MoveSubs from './pages/moveSubs/MoveSubs';
import Success from './pages/success/Success';
import Found from './pages/found/Found';
import ActiveSubCard from './pages/activeSubCard/activeSubCard';
import Tariffs from './pages/Tariffs/Tariffs';
import Catalog from './pages/Catalog/Catalog';
import CatalogTheme from './pages/CatalogTheme/CatalogTheme';
import Subscribe from './pages/subscribe/Subscribe';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
      <Routes>
        <Route path="/pay2u" element={<Entry />} />

        <Route path='/pay2u/activesubscriptions' element={<ActiveSubs />} />
        <Route path='/pay2u/activesubscriptions/onboarding' element={<Onboarding />} />
        <Route path='/pay2u/activesubscriptions/promos' element={<Promocodes />} />
        <Route path='/pay2u/activesubscriptions/expenses' element={<Expenses />} />

        <Route path='/pay2u/activesubscriptions/submanagement' element={<Management />} />
        <Route path='/pay2u/activesubscriptions/submanagement/movesubs' element={<MoveSubs />} />
        <Route path='/pay2u/activesubscriptions/submanagement/movesubs/found' element={<Found />} />

        <Route path='/pay2u/catalog' element={<Catalog />} />
        <Route path='/pay2u/catalog/theme' element={<CatalogTheme />} />
        <Route path='/pay2u/catalog/theme/details' element={<ActiveSubCard />} />
        <Route path='/pay2u/catalog/theme/details/tariffs' element={<Tariffs newsub='new' />} />
        <Route path='/pay2u/catalog/theme/details/tariffs/subscribe' element={<Subscribe />} />

        <Route path='/pay2u/successmove' element={<Success theme='subs' />} />
        <Route path='/pay2u/successprolong' element={<Success theme='prolong' />} />
        <Route path='/pay2u/successtarif' element={<Success theme='tarif' />} />
        <Route path='/pay2u/successnew' element={<Success theme='newsub' />} />
        <Route path='/pay2u/errornotenough' element={<Success error='true' theme='notenoughmoney' />} />
        <Route path='/pay2u/errornotfound' element={<Success error='true' theme='notfound' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
