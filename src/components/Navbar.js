import logo from "./images/logo.png"

function Navbar (){
    return(
        <nav className="nav">
            <img src={logo} alt="logo" className="logo__img"></img>
        </nav>
    )
}

export default Navbar