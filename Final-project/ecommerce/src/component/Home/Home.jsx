

import React from 'react'
import "../Home/Home.css"


const Home = () => {
    return(
        <>
            <div className='home_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className='col-12 col-md-3'>
                            <img src={pic1}/>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className='col-12 col-md-3'>
                            {/* <img src={}/> */}
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className='col-12 col-md-3'>
                            {/* <img src={}/> */}
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className='col-12 col-md-3'>
                            {/* <img src={}/> */}
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="care">
                    <h3>How to care for linen</h3>
                    <p>East, Breezy and Lightweight. Its one of summer's defining fabrics. Learn how to look after your linen piece with the help of our store care guide.</p>
                </div>
            </div>
        </>
    )
}

export default Home
