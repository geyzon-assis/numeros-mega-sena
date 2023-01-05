export default function mega(quantidade = 6, numerosSorteados: number[] = []): any {
  if (quantidade > 60 || quantidade < 6) {
    throw 'Quantidade não permitida'
  }
  if (numerosSorteados.length === quantidade) {
    return numerosSorteados
  }
  const numeroAleatorio = Math.ceil(Math.random() * 60)

  if (!numerosSorteados.includes(numeroAleatorio)) {
    return mega(quantidade, [...numerosSorteados, numeroAleatorio])
  } else {
    return mega(quantidade, numerosSorteados)
  }
}
console.log(mega())