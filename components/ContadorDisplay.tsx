import MostradorIndividual from "./MostradorIndividual"

export default function ContadorDisplay(props: any) {
  function loopNumeros(arr: any) {
    const retorno = []
    let key = 0
    for (const a of arr) {

      retorno.push(<MostradorIndividual valor={a} Key={key} />)
      key++
    }
    return retorno
  }

  return (<div style={{ display: "flex" }}>
    {loopNumeros(props.array)}
  </div>)
}