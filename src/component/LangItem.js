import React from 'react'
import "../stylingsheets/Language.css"

export default function LangItem(props) {

  const spanStyle={
    marginLeft:`${props.langPercent}%`
  }
  const progressStyle={
    width:`${props.langPercent}%`
  }

  return (
    <>
    <div className='lang-item' >
      <div className='text'>
        <span>{props.langName}</span>
        <span style={spanStyle}>{`${props.langPercent}%`}</span>
      </div>
      <div className='progressBar'>
        <div className='progress' style={progressStyle}></div>
      </div>

    </div>
    </>
  )
}
