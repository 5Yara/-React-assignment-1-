import React from 'react'
import style from '../../Components/About/About.module.css'

export default function About() {
    return <>

        <div className={`${style.backgroundColor} text-white py-5`}>
            <div className="pt-4 text-center">
                <h2 className='pt-5'>ABOUT COMPONENT</h2>
                <div className="d-flex justify-content-center align-items-center mb-3">
                    <div className={`${style.line} me-3`}></div>
                    <i className="fa-solid fa-star"></i>
                    <div className={`${style.line} ms-3`}></div>
                </div>
            </div>
            <div className="container">
                <div className="row px-5">
                    <div className="col-md-6 ps-md-5">
                        <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
                    </div>
                    <div className="col-md-6 pe-5 pb-5" >
                    <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
                    </div>
                </div>
            </div>
        </div>


    </>
}
