
//import Navbar from './components/navbar/Navbar'
//import Footer from './components/footer/Footer'
import './App.css';
import Home from './paginas/home/Home';
import Footer from './componets/footer/Footer';
import Navbar from './componets/navbar/Navbar';

function App() {
  return (
    <div>
    <h1>Minha aplicação</h1>
    <p>Conteúdo da minha aplicação</p>
    <Home />
    <Footer />
    <Navbar />
  </div>
   
  )
}

export default App