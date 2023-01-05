export default function gerarNumeros(quantidade: number): number[] {
  const result: number[] = []
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
  return Math.ceil(Math.random() * num)
}