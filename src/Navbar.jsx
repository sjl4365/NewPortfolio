/*src/Navbar.jsx */
import {Link} from 'react-router-dom'
import React from 'react'

const Navbar=()=>{
    return(
        <nav>
            <div className="links">

            <Link to="/" className="HomeRoute">Home</Link>
            <Link to="/work" className="WorkRoute">Work Experience</Link>
            {/* <Link to="/student" className="SchoolRoute">Student Involvement</Link> */}
            <Link to="/extra" className="ExtraRoute">Extracurricular Acrtivities</Link>
            <Link to="/hackathon" className='HackRoute'>Hackathon</Link>
            <Link to="/project" className="ProjRoute">Projects</Link>
                {/* <a href="/" className='HomeRoute'>Home</a> 
                <a href="/work" className='WorkRoute'>Work Experience </a>
                <a href="/hackathon" className='HackRoute'>Hackathons/Projects</a> */}

                {/* <a href="/" className='HomeRoute'>Home</a> 
                <a href="/work" className='WorkRoute'>Work Experience </a>
                <a href="/hackathon" className='HackRoute'>Hackathons/Projects</a> */}

            </div>
            
        </nav>
    );
}
export default Navbar;