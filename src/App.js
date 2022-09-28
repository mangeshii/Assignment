
import MainContainer from "./components/Main/main-container";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Pages/Home"
import Saved from "./components/Pages/Saved"
import Messages from "./components/Pages/Messages"
import NavBar from "./components/Nav/navbar"

function App() {
  let component;
  switch (window.location.pathname) {
    case "/home":
      component = <Home />
      break;
    case "/saved":
      component = <Saved />
      break
    case "/messages":
      component = <Messages />
      break


  }

  return (
    <>
      <NavBar />
      <Router>
        <div className="App ">
          <Routes>
            <Route exact path="/" element={<MainContainer />} />
            <Route path="/home" element={<Home />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;




