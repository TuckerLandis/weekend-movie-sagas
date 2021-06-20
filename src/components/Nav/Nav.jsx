import { useHistory, Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
import './nav.css'

function Nav () {


    return (
        <div className="nav">
            <p className="nav-link"> <Button className="add-button" variant="contained" color="primary"> <Link to="/form"> + Add Movie </Link> </Button> </p> 
        </div>

    )
}

export default Nav