
import React from 'react'
import "../Catalog/Catalog.css"
import bag from "../../assets/bag.jpeg"
import watch from "../../assets/watch.jpeg"
import shoe from "../../assets/shoe.png"
import { Link } from "react-router-dom";


const Catalog = () => {
    return(
        <>
            <div className="container">
                <div className="breadcrumb mt-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link  to="/" href="#"><h5>Home</h5></Link></li>
                            <li class="breadcrumb-item active fw-bold" aria-current="page">Catalog</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container mt-5">
                <div className="catalog_wrapper">
                    <div className="collect">
                        <li>
                            <ul><h5>COLECTIONS</h5></ul>
                            <ul>Accessories</ul>
                            <ul>Jeans</ul>
                            <ul>Men</ul>
                            <ul>New Collection</ul>
                            <ul>Sale</ul>
                            <ul>T-Shirt</ul>
                        </li>
                        <div className="fashion">
                            <h4>NEW COLLECTION OF FASHION CLOTHES</h4>
                        </div>
                        <h4 className='mt-3'>PRODUCT</h4>
                        <div className="cad1 mt-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card border-0">
                                        <img src={watch} className="card-img-top m-0" alt="..." height="100px"/>
                                        <div className="card-body p-0 px-2">
                                            <h6 className="card-title">Wrist Watch</h6>
                                            <p className="card-text m-0">$55.00 <span className='text-decoration-line-through text-sm'>$70.20</span></p>
                                            <a href="#" className="btn btn-dark">Purchase</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cad2 mt-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card border-0">
                                        <img src={shoe} className="card-img-top m-0" alt="..." height="110px"/>
                                        <div className="card-body p-0 px-2">
                                            <h6 className="card-title">Canvas Shoe</h6>
                                            <p className="card-text m-0">$26.00 <span className='text-decoration-line-through'>$35.00</span></p>
                                            <a href="#" className="btn btn-dark">Purchase</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product m-5 mt-0">
                        <h1>PRODUCT</h1>
                        <div className="btns">
                            <button className="btn btn-dark" type="button">TOUS</button>
                            <button className="btn btn-secondary" type="button">Brand</button>
                            <button className="btn btn-secondary" type="button">Clothes</button>
                            <button className="btn btn-secondary" type="button">Fashion</button>
                            <button className="btn btn-secondary" type="button">Trend</button>
                            <button className="btn btn-secondary" type="button">Urban</button>
                        </div>
                        <div className="selc">
                            <i className="fa-solid fa-bars"></i>
                            <i className="fa-solid fa-list"></i>
                            <div id='product'>
                                <label className="">Select</label>
                                <select name="" id="">
                                    <option value="">T-Shirt</option>
                                    <option value="">Jeans</option>
                                    <option value="">Men</option>
                                    <option value="">Women</option>
                                </select>
                            </div>

                            <div id="quantity">
                                <label className="">20 article(s)  Amount</label>
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                    <option value="">6</option>
                                    <option value="">7</option>
                                    <option value="">8</option>
                                    <option value="">9</option>
                                    <option value="">10</option>
                                </select>
                            </div>
                        </div>
                        <div className="catalog mt-5">
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <div className="card border-0">
                                        <img src={bag} className="card-img-top rounded" alt="..."/>
                                        <div className="card-body">
                                            <p className="card-title text-center">Nigeria</p>
                                            <h5 className="card-text text-center">LEATHER BAG</h5>
                                            <p className="card-text text-sm-center">$15.60</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="card border-0">
                                        <img src={shoe} className="card-img-top rounder" alt="..."/>
                                        <div className="card-body">
                                            <p className="card-title text-center">USA</p>
                                            <h5 className="card-text text-center">CANVAS SHOES</h5>
                                            <p className="card-text text-sm-center">$26.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="card border-0">
                                        <img src={watch} className="card-img-top rounded" alt="..."/>
                                        <div className="card-body">
                                            <p className="card-title text-center">Japan</p>
                                            <h5 className="card-text text-center">WRIST WATCH</h5>
                                            <p className="card-text text-sm-center">$55.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12 col-md-4">
                                    <div className="card border-0">
                                        <img src={bag} className="card-img-top rounded" alt="..."/>
                                        <div className="card-body">
                                            <p className="card-title text-center">Nigeria</p>
                                            <h5 className="card-text text-center">LEATHER BAG</h5>
                                            <p className="card-text text-sm-center">$15.60</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="card border-0">
                                        <img src={shoe} className="card-img-top rounder" alt="..."/>
                                        <div className="card-body">
                                            <p className="card-title text-center">USA</p>
                                            <h5 className="card-text text-center">CANVAS SHOE</h5>
                                            <p className="card-text text-sm-center">$26.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="card border-0">
                                        <img src={watch} className="card-img-top rounded" alt="..."/>
                                        <div className="card-body">
                                            <p className="card-title text-center">Japan</p>
                                            <h5 className="card-text text-center">WRIST WATCH</h5>
                                            <p className="card-text text-sm-center">$55.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog


