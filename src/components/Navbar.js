import Logo from "../images/logo.png"

export default function NavBar(){
    return(
        <nav className="navBar">
            <img src={Logo} alt="logo"></img>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#projects">PROJECTS</a></li>   
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
    )
}   