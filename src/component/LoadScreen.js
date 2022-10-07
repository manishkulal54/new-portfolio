import React from 'react'
import Loader from 'react-animated-loader';

export default function LoadScreen() {
  return (
    <div className='container_LS' 
    style={{
        height:"100vh",
        width:"100vw",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }}>
			<Loader />
		</div>
  )
}
