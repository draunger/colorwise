import './App.css';
import Frontpage from './components/Frontpage.jsx';
import Photo from './components/Photo.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/photo-choose" element={<Photo />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
