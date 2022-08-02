import React from 'react'

export default function Btn(props) {
  
  const cssBtn = {
    fontSize: 30,
    height: 75,
    width: 75, 
    padding: 20,
    backgroundColor: '#000',
    color: '#FFF',
    borderColor: '#000',
    textAlign: 'center',
    outLine: 'none',
borderRadius: 0
  }
  
  return(
  <button style={cssBtn} onClick={props.onclick}>{props.label}</button>
  )
}