import banner from "./prime_theater_cropped.jpg"
import './header.css'

function Header () {
    return (
        <div>
            <img src={banner} width="45%" className="header-img"/>
        </div>
    )
}

export default Header