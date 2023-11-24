function Card({skill}){
    return(
        <div className="card">
           
            <img src={skill.image} className="next"/>
        </div>
    );
}
export default Card;