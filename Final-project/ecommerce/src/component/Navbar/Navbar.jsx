import React from "react";
import "../Navbar/Navbar.css";


function Navbar() {
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    {/*PRIMARY NAVBAR */}
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid">
                            <a className="navbar-brand text-white" href="#">Order Online or Call us (1800)000 8808</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto">
                                <a className="nav-link text-white" href="#">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <span>Search</span>
                                </a>
                                <a className="nav-link text-white" href="#">
                                    <i class="fa-solid fa-user"></i>
                                </a>
                                <a className="nav-link text-white" href="#">
                                    <i className="fa-solid fa-heart"></i>
                                    <span>Wish list</span>
                                </a>
                                <a className="nav-link text-white" href="#">
                                    <span>usd</span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </a>          
                            </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="sec_wrapper">
                <div className="container">
                        {/*PRIMARY NAVBAR */}
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">Urban people</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav ms-auto sec_item">
                                        <a className="nav-link " href="#">Home</a>
                                        <a className="nav-link " href="#">Catalog</a>
                                        <a className="nav-link " href="#">Collection</a>
                                        <a className="nav-link " href="#">Blog</a>   
                                        <a className="nav-link " href="#">Sales</a> 
                                        <a className="nav-link " href="#">Contact us</a>
                                        <a className="nav-link " href="#">
                                        <i class="fa-solid fa-cart-shopping"></i>
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