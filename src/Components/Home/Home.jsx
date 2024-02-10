import React from 'react'
import image from '../../Assets/Images/avataaars.svg'
import style from '../../Components/Home/Home.module.css'

export default function Home() {
    return <>

        <div className={`${style.backgroundColor} py-5 d-flex justify-content-center align-items-center text-white`}>
            <div className="text-center">
                <img src={`${image}`} alt="" className="w-75 mb-3" />
                <div className="text-center pt-4">
                    <h2 className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <div className={`${style.line} me-3`}></div>
                        <i className="fa-solid fa-star"></i>
                        <div className={`${style.line} ms-3`}></div>
                    </div>
                </div>

                <div className='pb-3'> Graphic Artist - Web Designer - Illustrator </div>
            </div>
        </div>

    </>
}
