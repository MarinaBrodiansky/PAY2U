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
        <Route path="/" element={<Entry />} />

        <Route path='/activesubscriptions' element={<ActiveSubs />} />
        <Route path='/activesubscriptions/onboarding' element={<Onboarding />} />
        <Route path='/activesubscriptions/promos' element={<Promocodes />} />
        <Route path='activesubscriptions/expenses' element={<Expenses />} />

        <Route path='/activesubscriptions/submanagement' element={<Management />} />
        <Route path='/activesubscriptions/submanagement/movesubs' element={<MoveSubs />} />
        <Route path='/activesubscriptions/submanagement/movesubs/found' element={<Found />} />

        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/theme' element={<CatalogTheme />} />
        <Route path='/catalog/theme/details' element={<ActiveSubCard />} />
        <Route path='/catalog/theme/details/tariffs' element={<Tariffs newsub='new' />} />
        <Route path='/catalog/theme/details/tariffs/subscribe' element={<Subscribe />} />

        <Route path='/successmove' element={<Success theme='subs' />} />
        <Route path='/successprolong' element={<Success theme='prolong' />} />
        <Route path='/successtarif' element={<Success theme='tarif' />} />
        <Route path='/successnew' element={<Success theme='newsub' />} />
        <Route path='/errornotenough' element={<Success error='true' theme='notenoughmoney' />} />
        <Route path='/errornotfound' element={<Success error='true' theme='notfound' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
