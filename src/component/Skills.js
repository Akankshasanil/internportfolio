import svgIcon4 from "../icon/Icon4.svg";
import HTML_IMG from "../images/images2.jpeg";
import CSS_IMG from "../images/images3.jpeg";
import JS_IMG from "../images/images4.jpeg";
import RWD_IMG from "../images/images5.jpeg";
import VC_IMG from "../images/images6.jpeg";
import "../css/Skills.css";
import Card from "./Card";
function Skills() {
  <h1 className="chip">
    <img src={svgIcon4} alt="gg4" />
    Skills
  </h1>;
  const skillp = [
    {
      id: 1,

      image: HTML_IMG,
    },
    {
      id: 2,

      image: CSS_IMG,
    },
    {
      id: 3,

      image: JS_IMG,
    },
    {
      id: 4,

      image: RWD_IMG,
    },
    {
      id: 5,

      image: VC_IMG,
    },
  ];

  return (
    <div>
      <p className="d">Skills</p>
      <div className="component">
        {skillp.map((item) => (
          <Card skill={item} />
        ))}
      </div>
    </div>
  );
}
export default Skills;
