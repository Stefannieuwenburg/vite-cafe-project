import { Link,Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../style/Navbar.css";

export default function Navbar(props) {
    // dit is de toggleMenu functie
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };
    // extra niet echt nodig
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);

    return (
        <div>
            <nav className="navbar-container">
                {(toggleMenu || screenWidth > 500) && (
                    <ul onClick={toggleNav} className="list">
                        <li className="items">
                            <Link className="link" to="/home">
                                Home
                            </Link>
                        </li>
                        <li className="items">
                            <Link className="link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="items">
                            <Link className="link" to="/menu">
                                Menu
                            </Link>
                        </li>
                        <li className="items">
                            <Link className="link" to="/where">
                                Where
                            </Link>
                        </li>
                    </ul>
                )}
                <FaBars onClick={toggleNav} className="fabars"></FaBars>
            </nav>
            <>''</>
            <Outlet />
        </div>
    );
}


