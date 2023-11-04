
import React from "react";
import { Link } from "react-router-dom";



const Collection = () => {
    return(
        <>
            <div className="container">
                <div className="collect_wrapper">
                    <div className="breadcrumb mt-5">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link  to="/" href="#"><h5>Home</h5></Link></li>
                                <li className="breadcrumb-item active fw-bold" aria-current="page">Collection</li>
                            </ol>
                        </nav>
                    </div>
                    <h1 className="mt-5">THIS IS THE COLLECTION PAGE</h1>
                    <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa earum impedit quaerat, expedita labore cum vitae et recusandae similique dolorum dolorem, aut qui in consectetur debitis sapiente nulla, tenetur placeat.
                    Obcaecati, aut culpa natus amet doloribus harum ab? Blanditiis ipsum aut est odio sint, vitae explicabo asperiores pariatur ducimus, sapiente, quas quod natus id culpa suscipit fuga ad iste aperiam.
                    Aliquid doloremque quae optio dolor id error? Quas repudiandae modi mollitia est, saepe ipsam perferendis nam! Dolores consequuntur mollitia tenetur pariatur unde suscipit et voluptates tempore molestiae, placeat, rerum nostrum.</p>
                </div>
            </div>
        </>
    )
}

export default Collection

