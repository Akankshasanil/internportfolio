import svgIcon4 from "../icon/Icon4.svg";
import "../css/Skills.css";
function Skills() {
  return (
    <section class="skills">
      <h2><img src={svgIcon4} alt="gg4" />Skills</h2>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>Responsive Web Design</li>
        <li>Version Control (Git)</li>
      </ul>
    </section>
  );
}
export default Skills;
