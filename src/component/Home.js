import React from 'react'

import backgroundVid from "../vid_img/backgroundVid1.mp4"
import logo from "../vid_img/logo.png"

import "../stylingsheets/Home.css"

export default function Home() {
  return (
    <>
    <div className='container_h'>
        <video src={backgroundVid} autoPlay muted loop id='bgVid'/>
        <div className='subcontainer_h'>
        <img src={logo} alt="Home logo" />
        </div>
    </div>
    </>
  )
}
