import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jobs from "./components/Jobs/Jobs"
import Saved from "./components/Pages/Saved"
import Messages from "./components/Pages/Messages"
import NavBar from "./components/Nav/navbar"
import Dashboard from "./components/Dashboard/dash-board";
import TrackApplication from './components/trackApplication/application';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/track_application/:id" element={<TrackApplication />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;






