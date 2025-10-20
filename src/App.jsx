import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Ofertas from './components/Ofertas';
import Destacados from './components/Destacados';
import Login from './components/Login'; 
import Footer from './components/Footer'

function App() {

  return (
     <Router>
      <Header />
      <Routes>
        <Route path="/administracion" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/destacados" element={<Destacados />} />
      </Routes>
      <Footer/> 
    </Router>
  )
}

export default App
