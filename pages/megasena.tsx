import { useState } from "react";
import mega from "../functions/mega";
import dynamic from "next/dynamic";
const MostradorIndividual = dynamic(() => import('../components/MostradorIndividual'), { ssr: false })

export default function Megasena() {
  const [numeros, setNumeros] = useState(mega())
  const [quantidade, setQuantidade] = useState(6)

  function renderNumeros() {
    return numeros.map((n: any) => <MostradorIndividual valor={n} key={n} />)
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <h1> Mega Sena</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {renderNumeros()}
      </div>
      <div>
        <input type="number" min={6} max={20} value={quantidade} onChange={ev => setQuantidade(parseInt(ev.target.value))} />
        <button onClick={() => setNumeros(mega(quantidade))}> Gerar Aposta</button>
      </div>

    </div>
  )
}