
import Login from './paginas/login/Login'
import './App.css';
import Home from './paginas/home/Home';
import Footer from './componets/footer/Footer';
import Navbar from './componets/navbar/Navbar';
import MediaControlCar from './paginas/midias/Midia'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Midia from './paginas/midias/Midia';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{minHeight: '85vh'}}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
      <Midia />
      <Footer />
    </BrowserRouter>
  )
}

export default App