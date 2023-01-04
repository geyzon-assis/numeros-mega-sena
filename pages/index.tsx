export default function mainPage() {
  return (
    <div>
      <input type="text" />
      <button onClick={() => gerarNumeros(6)}> Gerar numeros</button>
    </div>
  )
}
function gerarNumeros(quantidade: number) {
  const result: (string | number)[] = []
  while (result.length < quantidade) {
    let newNumber = numeroAleatorio(60)
    if (!result.includes(newNumber)) {
      result.push(newNumber)
      console.log(newNumber)
    }
  }
  return result
}
function numeroAleatorio(num: number) {
  return Math.ceil(Math.random() * num).toString()
}