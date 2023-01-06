export default function mega(quantidade = 6, numerosSorteados: number[] = []): number[] {
  // A quantidade precisa ser limitada, pois no Mega-sena o jogo minimo são 6 numeros
  if (quantidade > 60 || quantidade < 6) {
    throw 'Quantidade não permitida'
  }
  // Se o array atingir a quantidade requisitada, devolvemos o resultado ordenado
  if (numerosSorteados.length === quantidade) {
    return numerosSorteados.sort((a, b) => a - b)
  }
  const numeroAleatorio = Math.ceil(Math.random() * 60)

  if (!numerosSorteados.includes(numeroAleatorio)) {
    return mega(quantidade, [...numerosSorteados, numeroAleatorio])
  } else {
    return mega(quantidade, numerosSorteados)
  }
}
