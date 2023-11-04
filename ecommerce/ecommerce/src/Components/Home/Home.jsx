
import React from 'react'
import "../Home/Home.css"
import pic1 from "../../assets/pic_one.png"
import pic2 from "../../assets/pic_two.png"
import pic3 from "../../assets/pic_tre.png"
import pic4 from "../../assets/pic_for.png"
import pic5 from "../../assets/pic_fiv.png"
import pic6 from "../../assets/pic_six.png"
import slide1 from "../../assets/slide_One.jpg"
import slide2 from "../../assets/slide_Two.jpg"
import slide3 from "../../assets/slide_Tre.jpg"
import slide4 from "../../assets/slide_For.jpg"
import slide5 from "../../assets/slide_Fiv.jpg"
import image1 from "../../assets/Img_One.jpg"
import image2 from "../../assets/Img_Two.jpg"
import image3 from "../../assets/Img_Tre.jpg"
import image4 from "../../assets/Img_For.jpg"
import image5 from "../../assets/Img_Fiv.jpg"
import image6 from "../../assets/Img_Six.jpg"
import { Link } from "react-router-dom";


const Home = () => {
    return(
        <>
            <div className="container">
                <div className='home_wrapper mt-5'>
                    <div className="breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link  to="/" href="#"><h5>Home</h5></Link></li>
                            </ol>
                        </nav>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className='col-12 col-md-2 col-sm-6'>
                                <img src={pic1} width="100%" height="422px"/>
                                <p>Plain coloured polyester shirt</p> 
                            </div>
                            <div className='col-12 col-md-2 col-sm-6'>
                                <img src={pic2} width="100%" height="422px"/>
                                <p>Blue jeans</p>
                            </div>
                            <div className='col-12 col-md-2 col-sm-6'>
                                <img src={pic3} width="100%" height="422px"/> 
                                <p>Plain coloured polyester pullover</p>
                            </div>
                            <div className='col-12 col-md-2 col-sm-6'>
                                <img src={pic4} width="100%" height="422px"/>
                                <p>black jeans</p>
                            </div>
                            <div className='col-12 col-md-2'>
                                <img src={pic5} width="100%" height="422px"/>
                                <p>silky flare dress</p>
                            </div>
                            <div className='col-12 col-md-2'>
                                <img src={pic6} width="100%" height="422px"/>
                                <p>Hoddy pullover</p>
                            </div>
                        </div>
                    </div>
                    <div className="linen-care mt-4">
                        <h3>How to care for linen</h3>
                        <p>East, Breezy and Lightweight. Its one of summer's defining fabrics. Learn how to look after your linen piece with the help of our store care guide.</p>
                    </div>
                    <div id="carouselExampleControlsNoTouching" className="carousel slide mt-5" data-bs-touch="false" data-bs-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={slide1} className="d-block w-100" alt="..." height={600}/>
                            </div>
                            <div className="carousel-item">
                                <img src={slide2} className="d-block w-100" alt="..." height={600}/>
                            </div>
                            <div className="carousel-item">
                                <img src={slide3} className="d-block w-100" alt="..." height={600}/>
                            </div>
                            <div className="carousel-item">
                                <img src={slide4} className="d-block w-100" alt="..." height={600}/>
                            </div>
                            <div className="carousel-item">
                                <img src={slide5} className="d-block w-100" alt="..." height={600}/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/** IMGs **/}
                    <div className="imgs mt-5">
                        <div className="imgs1">
                            <img id='img-1' className='m-3' src={image1} alt="" height="70%" width="350px"/>
                            <img id='img-2' className='m-3' src={image2} alt="" height="30%" width="350px"/>
                        </div>
                        <div className="imgs2">
                            <img id='img-3' className='m-3' src={image3} alt="" height="45%" width="350px"/>
                            <div>
                                <p className='m-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae odit quis commodi ut tempora. Voluptatum, eveniet quia! Autem, asperiores, rerum repudiandae maxime dignissimos alias consequuntur voluptatibus ex velit sunt quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum, est nemo adipisci quam delectus aperiam, labore, dolorem esse ab necessitatibus quia consectetur cum maiores soluta. Eum atque et eaque!</p>
                            </div>
                            <img id='img-4' className='m-3' src={image4} alt="" height="45%" width="350px"/>
                        </div>
                        <div className="imgs3">
                            <img id='img-5' className='m-3' src={image5} alt="" height="70%" width="350px"/>
                            <img id='img-6' className='m-3' src={image6} alt="" height="30%" width="350px"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home
