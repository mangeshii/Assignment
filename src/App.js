import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecommendedJobs from "./components/RecommendedJobs/recommendedJobs"
import Saved from "./components/Pages/Saved"
import Messages from "./components/Pages/Messages"
import NavBar from "./components/Nav/navbar"
import AppliedJobs from "./components/AppliedJobs/appliedJobs";
import TrackApplication from './components/trackApplication/application';

function App() {

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<AppliedJobs />} />
          <Route path="/jobs" element={<RecommendedJobs />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/track_application/:id" element={<TrackApplication />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;






