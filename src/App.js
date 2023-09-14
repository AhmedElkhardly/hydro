import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar/NavBar';
import Project from './Pages/Project';
import 'swiper/css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
