import "./style.css"
import { useNavigate } from "react-router-dom";

const NavBar = (props) =>{
    let navigate = useNavigate();

    function redirectHome() {
        navigate("/");
    }


    return(
        <nav className={`main-nav ${props.style}`}>
            <h1 onClick={redirectHome}>Recipe Gains</h1>
            <ul className="navLinks">
                
                <li onClick={()=>navigate("/")}>Home</li>
                <li onClick={()=>navigate("/search")} >Search</li>
                <li onClick={()=>navigate("/category")} >Category</li>
                <li onClick={()=>navigate("/meal")} >Meal</li>
            </ul>
            
        </nav>
    )
}
export default NavBar;