import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <ul id='nav'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='create-post'>Create Post</Link>
                </li>
                <li></li>

            </ul>
        </div>
    );
    
}



export default Navbar;