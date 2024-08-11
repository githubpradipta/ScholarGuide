import React from 'react'
import './Button.css'

export default function Button(props) {

  return (
    <button className={`my-btn ${props.varient=='filled'?'filled':'outlined'} ${props.color} ${props.flex==true?'doflex':''} ${props.className}`}
    onClick={props.onClick}
    >{props.children}</button>
  )
}
