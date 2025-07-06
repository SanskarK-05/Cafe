import React from "react";
import { Link } from "react-router-dom";

function Header({ setSelectedSection }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={() => setSelectedSection("all")}><h1>Cafe 2</h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul>
                        <li className="nav-item" onClick={() => setSelectedSection("cold")}>
                            <Link className="nav-link" to="/">Cold Coffee</Link>
                        </li>
                        <li className="nav-item" onClick={() => setSelectedSection("hot")}>
                            <Link className="nav-link" to="/">Hot Coffee</Link>
                        </li>
                        <li className="nav-item" onClick={() => setSelectedSection("desserts")}>
                            <Link className="nav-link" to="/">Desserts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;

{/* <li onClick={() => setSelectedSection("cold")}>Cold Coffee</li>
                                    <li onClick={() => setSelectedSection("hot")}>Hot Coffee</li>
                                    <li onClick={() => setSelectedSection("desserts")}>Desserts</li> */}
