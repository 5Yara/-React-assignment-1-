import React from 'react'
import style from '../../Components/Contact/Contact.module.css'

export default function Contact() {
    return <>

        <div className="pt-4 text-center">
            <h2 className={style.textColor}>CONATCT SECTION</h2>
            <div className="d-flex justify-content-center align-items-center mb-3">
                <div className={`${style.line} me-3`}></div>
                <i className={`fa-solid fa-star ${style.textColor}`}></i>
                <div className={`${style.line} ms-3`}></div>
            </div>
        </div>

        <div className="container">
            <form novalidate="" action="" className="w-50 p-3 mx-auto mt-5">
                {/* <label for="userName" className="position-relative top-0 ps-2">userName : </label> */}
                <input id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 my-2 position-relative" fdprocessedid="miw22r" />
                {/* <label for="userAge" className="position-relative top-0 ps-2">userAge : </label> */}
                <input id="userAge" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 my-2 position-relative" fdprocessedid="z8srti" />
                {/* <label for="userEmail" className="position-relative top-0 ps-2">userEmail : </label> */}
                <input id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 my-2 position-relative" fdprocessedid="ha5v0c" />
                {/* <label for="userPassword" className="position-relative top-0 ps-2 pt-5">userPassword : </label> */}
                <input id="userPassword" type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 my-2 position-relative" fdprocessedid="zy75k6" />
                <button className={`btn mt-4 text-white ${style.backgroundColor}`} fdprocessedid="jcgtz"> send Message </button>
            </form>
        </div>

    </>
}
