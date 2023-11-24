import "../css/About_us.css";
import image from "../images/pic1.jpg";
function About_us() {
  return (
    <div className="container">
     
      <h2 className="ed">About Me</h2>
      <div className="lock">
      <div className="image">
        <img src={image} alt="My Profile Picture" />
      </div>

      <div className="about">
      <section>
        <p>
          Welcome to my portfolio! I am a passionate web developer with a focus
          on creating clean and user-friendly websites.
        </p>
        
          <p>
            Outside of design, I'm an avid art enthusiast, always seeking
            inspiration from various mediums. I believe in the power of design
            to create meaningful connections, and I'm excited about the
            possibilities that lie ahead in every project.
          </p>
        </section>
</div>
       
      </div>
    </div>
  );
}
export default About_us;
