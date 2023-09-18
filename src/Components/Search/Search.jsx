import "./Search.css";
import Image1 from "../../assets/SuspenseLogo.png"

function NavBar()
{
    return (
        <div className="navbar">
            <img src={Image1} alt="logo" id="logo"  />
    
            <input type="search" placeholder="Search Photo ..."  id="search"/>
        </div>
    )
}

export default NavBar