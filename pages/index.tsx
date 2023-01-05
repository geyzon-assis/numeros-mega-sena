import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from "react"
import ContadorDisplay from "../components/ContadorDisplay"
import gerarNumeros from "../components/geradorDeNumeros"

export default function MainPage() {


  let resultArray: number[] = []
  const [qnt, setQnt] = useState('')
  const [result, setResult] = useState([0])
  return (
    <div>
      <input type="number" value={qnt} onChange={e => setQnt(e.target.value)} />
      <button onClick={
        () => {
          setResult([])
          resultArray = gerarNumeros(Number(qnt));
          loopNumeros()
        }}> Gerar numeros
      </button>
      <div><ContadorDisplay array={result} /></div>
    </div >
  )
  function loopNumeros() {
    for (const a of resultArray) {
      setResult(prev => [...prev, a])
    }
  }
}