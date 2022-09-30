import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecommendedJobs from "./components/recommendedJobs/recommendedJobs";
import Messages from "./pages/messages"
import Saved from  "./pages/saved"
import NavBar from "./components/navbar/navbar"
import AppliedJobs from "./components/appliedJobs/appliedJobs";
import TrackApplication from './components/trackApplication/trackApplication';
import { CandidateState } from './context/context';


function App() {

  return (
    <>
      <NavBar />
      <CandidateState>
        <Router>
          <Routes>
            <Route exact path="/" element={<AppliedJobs />} />
            <Route path="/jobs" element={<RecommendedJobs />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/track_application/:id" element={<TrackApplication />} />
          </Routes>
        </Router>
      </CandidateState>

    </>
  );
}

export default App;






