
import MainContainer from "./components/Main/main-container";
import NavBar from "./components/Nav/navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Saved from "./components/Saved"
import Messages from "./components/Messages"


function App() {
  return (
    <Router>
      <div className="App ">
        <Routes>
          <Route exact path="/" element={<MainContainer />}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/saved" element={<Saved/>}/>
          <Route path="/messages" element={<Messages/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;




