import { useHistory, Link } from "react-router-dom"

function Nav () {


    return (
        <div className="nav">
            <p className="nav-link"> <Link to="/form"> Add Movie </Link> </p> 
            <p className="nav-link"> <Link to="/favorite"> 🖤 Favorites </Link> </p> 
        </div>

    )
}

export default Nav