function Card(props){
    return (
        <li className={props.className}>
            <img src={props.imgSrc} alt={props.imgAlt} />
            <h2> {props.title} </h2>
            <p> {props.description} </p>
        </li>
    );
}

export default Card;