import React, { useEffect, useState } from 'react'
import './Scroll.css'

function ScrollBtn() {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 300){
                setShowBtn(true);
            }else{
                setShowBtn(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToTop = ()=> {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    
  return (
    <div className='topOnClick'>
        {showBtn && (
            <i className="top far fa-arrow-alt-circle-up" onClick={scrollToTop}></i>
        )}
    </div>
  )
}

export default ScrollBtn