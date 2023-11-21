import About_us from "./About_us";
import Skills from "./Skills";
import '../css/Home.css';
 import svgIcon2 from "../icon/Icon2.svg";
 import svgIcon5 from "../icon/Icon5.svg";
 import svgIcon6 from "../icon/Icon6.svg";
 import svgIcon7 from "../icon/Icon7.svg";
function Home() {
    return (
      <div>
        <About_us/>
        <Skills/>
      <section class="contact">
                       <h2><img src={svgIcon2} alt="gg2" />Contact</h2>
                         <ul>
                          <li><img src={svgIcon5} alt="gg5" /> Email: akanksha@email.com</li>
                         <li><img src={svgIcon6} alt="gg6" />LinkedIn: linkedin.com/in/abcd</li>
                         <li><img src={svgIcon7} alt="gg7" />GitHub: github.com/the8</li>
                         </ul>
                      </section>
                         </div>
    )
}
export default Home;