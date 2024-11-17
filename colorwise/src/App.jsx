import './App.css'
import Frontpage from './components/Frontpage.jsx';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Photo from './components/Photo.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/photo-choose" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
