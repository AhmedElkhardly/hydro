import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar/NavBar';
import Specifications from './Pages/Specifications';
import 'swiper/css';
import Footer from './Components/Footer/Footer';
import i18next from 'i18next';

function App() {
  return (
    <div className={`${i18next.language === 'en' ? 'englishWrapper' : 'ArabicWrapper'}`}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specifications" element={<Specifications />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
