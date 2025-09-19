/*src/App.jsx */

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Hackathon from './Hackathon';
import Project from './Project';
import Workexperience from './Workexperience';
import SchoolInvolvement from './SchoolInvolvement';
import ExtracurricularActivities from './ExtracurricularActivities';

function App() {
  return (
    <Router>
      <div className="Route">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Workexperience />} />
            <Route path="/student" element={<SchoolInvolvement/>} />
            <Route path="/extra" element={<ExtracurricularActivities/>} />
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;