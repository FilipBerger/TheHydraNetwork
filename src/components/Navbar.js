import { Link } from "react-router-dom";
import logo from './media/HydraLogo.PNG';


const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt='logo' className='hydra-logo-navbar'></img>
            <h1>The Hydra Network</h1>
            <div>
                <Link to="/feed">My Feed</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/">Log out</Link>
            </div>
        </nav>
    );
}

export default Navbar;