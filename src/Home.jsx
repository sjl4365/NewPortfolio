/*src/Home.jsx*/

import Aboutme from "./Aboutme"
import photo from './photo.jpeg'

function Home(){
    const redirect = () =>{
        window.location.href ='https://www.linkedin.com/in/sam-l-4981112b9' 
    }

    return(
        <div className="Home">
            <div>
                <h1 className="Name">Hello, I'm Sam</h1>
                <h1 className="About">About Me</h1>
                
                <div className="photo-contact-section">
                    <img src={photo} className="Photo"/>
                    
                    <div className="contact-info">
                        <h2 className="GetInTouch">Get in Touch!</h2>
                        <button onClick={redirect} className="LinkedinButton">LinkedIn</button>
                    </div>
                </div>
                
                <Aboutme/>
            </div>
        </div>
    )
}
export default Home