import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/info">Info</Link>
            </ul>
            <p>ARC Weather Center v1.6.9</p>
        </nav>
    );
}