import { Outlet, Link } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/people'>Our People</Link>
                    </li>
                    <li>
                        <Link to='/employment'>Oppurtunities</Link>
                    </li>
                    <li>
                        <Link to='/minors'>Our Minors</Link>
                    </li>
                    <li>
                        <Link to='/degrees'>Our Programs</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>

    )
}

export default Navbar