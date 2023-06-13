import React from 'react'
import "./intro.css"
import Me from "../../img/profile.png"
function intro() {
  return (
    <div className="i">

        <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className="i-intro">I am </h2>
            <h1 className="i-name">Vedant Srivastava</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">web Developer</div> 
                    <div className="i-title-item">UI/UX Designer</div> 
                    <div className="i-title-item">Photographer</div> 
                    <div className="i-title-item">Writer</div> 
                    <div className="i-title-item">Content Creator</div>

        </div> 
        </div>
        <div className="i-desc">
        23yo software dev with expertise in 
        Node.js, Angular, React & full-stack Java. 
        AWS & GCP certified, 
        also a passionate photographer & tech enthusiast

        </div>
        
        </div>
        </div>

        {/* this  is  the right  side  */}
        <div className="i-right">
            <div className="i-bg">

            </div>
           <img src={Me} alt="" className = "i-img" />
            </div>
        </ div>
  )
}

export default intro