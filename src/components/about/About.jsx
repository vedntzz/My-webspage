import React from 'react'
import "./About.css"

function About() {
  return (

    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
        <img src= "https://images.pexels.com/photos/3031391/pexels-photo-3031391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="" 
        className = "a-img" />
        </div>



      </div>
      <div className="a-right">
      <h1 className="a-title">About Me </h1>
      <p className="a-sub">
          It is a long established fact that a reader will be d
          readable content.
        </p>
          <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing e]
          eiusmod tempor incididunt ut labore et dolore magna a
          minim veniam, quis nostrud exercitation ullamco labor
          aliquip ex ea commodo consequat duis aute irure dolor
          </p>
          <div className="a-award">
          <img src= "https://images.pexels.com/photos/321457/pexels-photo-321457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="" 
          className="a-award-img" />
          <img src= "https://images.pexels.com/photos/321457/pexels-photo-321457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="" 
          className="a-award-img" />
          <img src= "https://images.pexels.com/photos/321457/pexels-photo-321457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="" 
          className="a-award-img" />
         
          </div>
      </div>
        </div>
  )
}

export default About