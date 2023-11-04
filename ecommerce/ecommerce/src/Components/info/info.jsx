
import React from "react";
import '../info/info.css'


const Info = () => {
    return(
        <>
            <div className="container-fluid mt-5">
                <div className="container">
                    <div className="info_wrapper">
                        <div className="category mt-5">
                            <li>
                                <ul><h5>Categories</h5></ul>
                                <ul>Accessories</ul>
                                <ul>Jeans</ul>
                                <ul>Men</ul>
                                <ul>New Collection</ul>
                                <ul>Sale</ul>
                                <ul>T-Shirt</ul>
                            </li>
                        </div>
                        <div className="info mt-5">
                            <li>
                                <ul><h5>Information</h5></ul>
                                <ul>About Us</ul>
                                <ul>Catalog</ul>
                                <ul>Contact Us</ul>
                                <ul>Collection</ul>
                                <ul>Password Page</ul>
                            </li>
                        </div>
                        <div className="account mt-5">
                            <li>
                                <ul><h5>Account</h5></ul>
                                <ul>My Account</ul>
                                <ul>Log in</ul>
                                <ul>My Addresses</ul>
                                <ul>My Orders</ul>
                                <ul>Password Page</ul>
                            </li>
                        </div>
                        <div className="follow-us mt-5">
                            <li>
                                <ul><h5>Follow Us</h5></ul>
                                <ul>Facebook</ul>
                                <ul>Twitter</ul>
                                <ul>Google</ul>
                                <ul>Youtube</ul>
                                <ul>Instargram</ul>
                            </li>
                        </div>
                    </div>
                    {/* <div className="publish m-5 border-top w-100">
                        <p>Copyright <i class="fa-regular fa-copyright"></i> 2023 | Joejim Chibuzor J.</p>
                    </div>    */}
                </div>
            </div>
  
            
        </>
    )
}

export default Info