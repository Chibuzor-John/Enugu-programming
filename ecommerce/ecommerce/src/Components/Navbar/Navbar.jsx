import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <>
            <div className="wrapper w-100">
                <div className="container">
                    {/*PRIMARY NAVBAR */}
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid">
                            <a className="navbar-brand text-white" href="#">Order Online or Call us (1800)000 8808</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav ms-auto" id="navbarNav">
                                    <a className="nav-link text-white" href="#">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                        <span>Search</span>
                                    </a>
                                    <a className="nav-link text-white" href="#">
                                        <i className="fa-solid fa-user"></i>
                                    </a>
                                    <a className="nav-link text-white" href="#">
                                        <i className="fa-solid fa-heart"></i>
                                        <span>Wish list</span>
                                    </a>
                                    <a className="nav-link text-white" href="#">
                                        <span>usd</span>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </a>          
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="sec_wrapper w-100">
                <div className="container">
                        {/*PRIMARY NAVBAR */}
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="container-fluid">
                                <Link to="/" className="navbar-brand" href="#">Urban people</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav ms-auto sec_item">
                                        <Link to="/" className="nav-link " href="#">Home</Link>
                                        <Link to="/catalog" className="nav-link " href="#">Catalog</Link>
                                        <Link to="/collection" className="nav-link " href="#">Collection</Link>
                                        <Link to="/blog" className="nav-link " href="#">Blog</Link>   
                                        <Link to="/sales" className="nav-link " href="#">Sales</Link> 
                                        <Link to="/contact" className="nav-link " href="#">Contact us</Link>
                                        <a className="nav-link " href="#">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                            <span>0 article(s)</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                </div>
            </div>
        </>
        
    )
}


export default Navbar