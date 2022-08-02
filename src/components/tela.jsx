import React, {useState} from 'react'


export default function Tela(props) {
  const cssTela = {
    display: 'flex',
    height: 80,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#444',
    flexDirection: 'column',
    width: 260
  }
  
  const cssTelaOper = {
    fontSize: 20,
    color: '#FFF',
    height: 20,
     paddingBottom: 10,
    paddingTop: 5,
  }
  
    const cssTelaRes = {
    fontSize: 35,
    color: '#fff',
    paddingTop: 5,
    paddingBottom: 5
  }
  
  return (
    <div style={cssTela}>
      <span style={cssTelaOper}>{props.valor}</span>
      <span style={cssTelaRes}>{props.res}</span>
    </div>
  );
}