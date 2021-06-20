import { useHistory, Link } from "react-router-dom"
import Button from '@material-ui/core/Button';

function Nav () {


    return (
        <div className="nav">
            <p className="nav-link"> <Button variant="outlined" color="primary"> <Link to="/form"> Add Movie </Link> </Button> </p> 
        </div>

    )
}

export default Nav