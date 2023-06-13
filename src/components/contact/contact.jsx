import React from 'react'
import "./contact.css"

function contact() {
  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src= "https://i.pinimg.com/564x/bc/eb/d4/bcebd4bd33f23dbaa1f7596c90df0218.jpg"
              alt="" 
              className="c-icon" />
              +1 1234 556 75
            </div>
            <div className="c-info-item">
              <img className="c-icon" 
              src= "https://i.pinimg.com/564x/e6/72/61/e6726163f7e8975d81eae246aad336ee.jpg"
              alt="" />
              contact@lama.dev
            </div>
            <div className="c-info-item">
              <img className="c-icon" 
              src= "https://i.pinimg.com/564x/1a/a5/30/1aa5309d0e9aed48bf546ab30fff04ff.jpg" 
              alt="" />
              245 King Street, Touterie Victoria 8520 Australia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          </div>
        </div>
    </div>
       
  )
}

export default contact