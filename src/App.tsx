import Login from "./paginas/login/Login";
import "./App.css";
import Home from "./paginas/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import MediaControlCar from "./paginas/midias/Midia";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Midia from "./paginas/midias/Midia";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaTemas from "./components/temas/listaTemas/ListaTemas";
import ListaPostagens from "./components/postagem/listaPostagem/ListaPostagens";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
        <Routes>
          {" "}
          // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTemas />} />
          <Route path="/postagens" element={<ListaPostagens />} />
        </Routes>
      </div>
      <Midia />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
