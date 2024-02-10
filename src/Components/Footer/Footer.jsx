import React from 'react'
import style from '../../Components/Footer/Footer.module.css'

export default function Footer() {
    return <>

        <div className={`${style.background}`}>
            <div className={`row  d-flex justify-content-center align-items-center text-white p-5 ${style.background}`}>
                <div className="col-md-3">
                    <div className="card-body m-4 text-center">
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-md-3 text-white">
                    <div className="card-body text-center">
                        <h3>AROUND THE WEB</h3>
                        <div className="icons">
                            <i className="fa-brands fa-facebook mx-1 border border-1 rounded-circle p-2"></i>
                            <i className="fa-brands fa-twitter mx-1 border border-1 rounded-circle p-2"></i>
                            <i className="fa-brands fa-linkedin-in mx-1 border border-1 rounded-circle p-2"></i>
                            <i className="fa-solid fa-globe mx-1 border border-1 rounded-circle p-2"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card-body text-center">
                        <h3>ABOUT FREELANCER</h3>
                        <p> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                    </div>
                </div>
            </div>
            <div className={`${style.backGround} p-5`}>
                <p className='text-white text-center'>Copyright © Your Website 2021</p>
            </div>
        </div>

    </>
}
