import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <nav className="flex justify-between p-4 bg-blue-600 text-white">
        <Link to="/">TripMate</Link>
        <div>
        <Link to="/dashboard" className="mx-2">Dashboard</Link>
        <Link to="/login" className="mx-2">Login</Link>
        <Link to="/register" className="mx-2">Register</Link>
        </div>
    </nav>
    );
}

export default Navbar;