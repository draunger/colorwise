import './App.css';
import Frontpage from './components/Frontpage.jsx';
import Photo from './components/Photo.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <HashRouter>
        <Routes>
          <Route path="#" element={<Frontpage />} />
          <Route path="/photo-choose" element={<Photo />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
