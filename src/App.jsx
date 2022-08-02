import React, { useState } from 'react'
import './App.css'
import Tela from './components/tela'
import Btn from './components/Btn'

export default function App() {

  const cssContainer = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    width: 300,
    border: '1px solid #000',
  }
  const cssBotoes = {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }

 //states
  const [valorTela, setValorTela]= useState('')
  const [resultado, setResultado]=useState(0)
  const [acumulador, setAcumulador]=useState(0)
  const [operado, setOperado]=useState(false)
  
    //funções 
  const addDigitoTela = (d) => {
    if((d === '+' || d === '-' || d === '*' || d === '/') && operado) {
      console.log("+-*/")
      setOperado(false)
      setValorTela(resultado + d)
      return 
    } if (operado) {
      setValorTela(d)
      setOperado(false)
      return
    }
   const valorDigitadoTela = valorTela + d
   setValorTela(valorDigitadoTela)
  }
  
  const LimparMemoria = () => {
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }
  
  const Operacao = (oper) => {
    if (oper == 'bs') {
      let vtela = valorTela
      vtela = vtela.substring(0,(vtela.length-1))
      setValorTela(vtela)
      setOperado(false)
      return
    } 
      try {
        //calculo
        const r = eval(valorTela)
        setAcumulador(r)
        setResultado(r)
        setOperado(true)
      } catch {
        setResultado('ERRO')
      }
  }
  

  return (
    <>
     <div style={cssContainer}>
       <h3>Calculadora Matemática</h3>
       <Tela valor={valorTela} res={resultado} />
        <div style={cssBotoes}>
          <Btn label={'AC'} onclick={LimparMemoria} />
          <Btn label={'('} onclick={() => addDigitoTela('(')} />
          <Btn label={')'} onclick={() => addDigitoTela(')')} />
          <Btn label={'/'} onclick={() => addDigitoTela('/')} />
          <Btn label={'7'} onclick={() => addDigitoTela('7')} />
          <Btn label={'8'} onclick={() => addDigitoTela('8')} />
          <Btn label={'9'} onclick={() => addDigitoTela('9')} />
          <Btn label={'*'} onclick={() => addDigitoTela('*')} />
          <Btn label={'4'} onclick={() => addDigitoTela('4')} />
          <Btn label={'5'} onclick={() => addDigitoTela('5')} />
          <Btn label={'6'} onclick={() => addDigitoTela('6')} />
          <Btn label={'-'} onclick={() => addDigitoTela('-')} />
          <Btn label={'1'} onclick={() => addDigitoTela('1')} />
          <Btn label={'2'} onclick={() => addDigitoTela('2')} />
          <Btn label={'3'} onclick={() => addDigitoTela('3')} />
          <Btn label={'+'} onclick={() => addDigitoTela('+')} />
          <Btn label={'0'} onclick={() => addDigitoTela('0')} />
          <Btn label={'.'} onclick={() => addDigitoTela('.')} />
          <Btn label={'<-'} onclick={() => Operacao('bs')} />
          <Btn label={'='} onclick={() => Operacao('=')} />
        
        </div>
      </div>
    </>
  );
}
