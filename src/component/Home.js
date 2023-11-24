import About_us from "./About_us";
import Skills from "./Skills";
import Contact from "./Contact";
import '../css/Home.css';
 import svgIcon2 from "../icon/Icon2.svg";
 import svgIcon5 from "../icon/Icon5.svg";
 import svgIcon6 from "../icon/Icon6.svg";
 import svgIcon7 from "../icon/Icon7.svg";

function Home() {
    return (
      <div>
        <div className="bigimage">
          <div className="overlay">
          <h1>I'm<span> Akanksha</span> H Sanil</h1>
          <p>This is my official portfolio website to show all
            Detail and work experiences in Web Development
          </p>
         
        </div>
          </div>
        <About_us/>
        <Skills/>
      <Contact/>
      <div className="contact">
                       <h2><img src={svgIcon2} alt="gg2" /> Contact</h2>
                       <div className="c1">
                         <ul>
                          <li><img src={svgIcon5} alt="gg5" /> : akanksha@gmail.com</li>
                         <li><img src={svgIcon6} alt="gg6" /> : linkedin.com/in/abcd</li>
                         <li><img src={svgIcon7} alt="gg7" /> : github.com/the8</li>
                         </ul>
                         </div>
                      </div>
                         </div>
    )
}
export default Home;