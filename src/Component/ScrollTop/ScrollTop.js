import React, {useState, useEffect} from 'react'
import './ScrollTop.css'
function ScrollTop(showBelow) {

    const [show,setShow] = useState(showBelow ? false : true)
    const handleScroll = () => {
        // console.log(window.scrollY);
        if(window.scrollY >= 400){
            if (!show) setShow (true)
        }else {
            if (show) setShow (false)
        }
    }
    useEffect(()=>{
        if(showBelow){
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`,handleScroll) 
        }
    }) 
    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: 'smooth'})
    }
    return (
        <>
            {show &&
                <div onClick={handleClick} className="btn btn-scroll-to-top">
                    <i className="fas fa-arrow-up"></i>
                </div> 
            }
        </>
    )
}

export default ScrollTop
