// import './App.css'
// import Home from './Home'

// import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Navbar from './Navbar';
// import Hackathon from './Hackathon';
// import Project from './Project';
// import Workexperience from './Workexperience';




// function App() {

//   return (
    

//     // <Router basename='/MyWebsite'>

//     <Router >
//       <div className='Route'>
//         <Navbar/>
        
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/work" element={<Workexperience/>}/>

//           <Route path="/hackathon" element={<Hackathon/>}/>
//           <Route path="/project" element={<Project/>}/>


//       </Routes>
//       </div>
//     </Router>
//   );
// }
// export default App 

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Hackathon from './Hackathon';
import Project from './Project';
import Workexperience from './Workexperience';

function App() {
  return (
    <Router>
      <div className="Route">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Workexperience />} />
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
