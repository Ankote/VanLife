
import { Link } from "react-router-dom"
import Logo from "./Logo"
import "./style/Header.css"

export default()=>{
    return(
        <header>
            <Link className="page-logo" to="/" >{<Logo/>}</Link>
			<nav>
				<Link to="/vans" >Vans</Link>
				<Link to="/about" >About</Link>
			</nav>

        </header>
    )
}