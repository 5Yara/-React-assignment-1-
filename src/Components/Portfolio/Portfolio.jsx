import React from 'react'
import style from '../../Components/Portfolio/Portfolio.module.css'
import image from '../../Assets/Images/poert1.png'
import image2 from '../../Assets/Images/port2.png'
import image3 from '../../Assets/Images/port3.png'

export default function Portfolio() {

    let get = () => {
        let myImage = document.getElementById('myImage');
        myImage.style.display = 'flex';
    }

    return <>



        <div className='py-5y'>

            <div className="pt-4 text-center">
                <h2 className={style.textColor}>PORTFOLIO COMPONENT</h2>
                <div className="d-flex justify-content-center align-items-center mb-3">
                    <div className={`${style.line} me-3`}></div>
                    <i className={`fa-solid fa-star ${style.textColor}`}></i>
                    <div className={`${style.line} ms-3`}></div>
                </div>
            </div>
            <div id='myImage' className={` position-fixed top-0 bottom-0 start-0 end-0 justify-content-center align-items-center ${style.index} ${style.none}`}>

                <div id='centerImage' className={`${style.mainimage}`}>

                </div>
            </div>
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="rounded-3 position-relative overflow-hidden" onClick={get}>
                            <img src={image} alt='' className='w-100' />
                            <div className={`position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ${style.itemBackground}`}>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="rounded-3 position-relative overflow-hidden" onClick={get}>
                            <img src={image2} alt='' className='w-100' />
                            <div className={`position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ${style.itemBackground}`}>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="rounded-3 position-relative overflow-hidden" onClick={get}>
                            <img src={image3} alt='' className='w-100' />
                            <div className={`position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ${style.itemBackground}`}>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="rounded-3 position-relative overflow-hidden" onClick={get}>
                            <img src={image} alt='' className='w-100' />
                            <div className={`position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ${style.itemBackground}`}>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="rounded-3 position-relative overflow-hidden" onClick={get}>
                            <img src={image2} alt='' className='w-100' />
                            <div className={`position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ${style.itemBackground}`}>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="rounded-3 position-relative overflow-hidden" onClick={get}>
                            <img src={image3} alt='' className='w-100' />
                            <div className={`position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center ${style.itemBackground}`}>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>


}