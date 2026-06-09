import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/">Home</Link>
            </ul>
            <p>ARC Weather Center v1.3.0</p>
        </nav>
    );
}