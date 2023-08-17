function Header(props){
    return (
        <header>
            <img src={props.imgSrc} alt="Medal badge with a star" />
            <h1>Key React Concepts</h1>
            <p>Selected key React concepts you should know about</p>
        </header>
    );
}

export default Header;