import Register from "./Pages/Register/Register";
import Auth from "./Pages/Auth/Auth";
import Recovery from "./Pages/Recovery/Recovery";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main/Main";
import Footer from "./Components/Footer/Footer";
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Recovery" element={<Recovery />} />
        <Route path="/Auth" element={<Auth/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
