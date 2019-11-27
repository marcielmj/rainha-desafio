'use strict'

function bloqueado (pos, bloqueios) {
  return bloqueios.filter(bloqueio => pos.lin === bloqueio[0] && pos.col === bloqueio[1]).length
}

function moverNorte (pos, tabuleiro, bloqueios, acc = 0) {
  if (pos.lin > tabuleiro || bloqueado(pos, bloqueios)) return acc

  pos.lin++
  return moverNorte(pos, tabuleiro, bloqueios, ++acc)
}

function moverSul (pos, tabuleiro, bloqueios, acc = 0) {
  if (pos.lin < 1 || bloqueado(pos, bloqueios)) return acc

  pos.lin--
  return moverSul(pos, tabuleiro, bloqueios, ++acc)
}

function moverLeste (pos, tabuleiro, bloqueios, acc = 0) {
  if (pos.col > tabuleiro || bloqueado(pos, bloqueios)) return acc

  pos.col++
  return moverLeste(pos, tabuleiro, bloqueios, ++acc)
}

function moverOeste (pos, tabuleiro, bloqueios, acc = 0) {
  if (pos.col < 1 || bloqueado(pos, bloqueios)) return acc

  pos.col--
  return moverOeste(pos, tabuleiro, bloqueios, ++acc)
}

function moverNordeste (pos, tabuleiro, bloqueios, acc = 0) {
  if (pos.col > tabuleiro || pos.lin > tabuleiro || bloqueado(pos, bloqueios)) return acc

  pos.col++
  pos.lin++
  return moverNordeste(pos, tabuleiro, bloqueios, ++acc)
}

function moverSudeste (pos, tabuleiro, bloqueios, acc = 0) {
  if (pos.col > tabuleiro || pos.lin < 1 || bloqueado(pos, bloqueios)) return acc

  pos.col++
  pos.lin--
  return moverSudeste(pos, tabuleiro, bloqueios, ++acc)
}

function moverNoroeste (pos, tabuleiro, bloqueios, acc = 0) {
  if (pos.lin > tabuleiro || pos.col < 1 || bloqueado(pos, bloqueios)) return acc

  pos.lin++
  pos.col--
  return moverNoroeste(pos, tabuleiro, bloqueios, ++acc)
}

function moverSudoeste (pos, tabuleiro, bloqueios, acc = 0) {
  if (pos.lin < 1 || pos.col < 1 || bloqueado(pos, bloqueios)) return acc

  pos.lin--
  pos.col--
  return moverSudoeste(pos, tabuleiro, bloqueios, ++acc)
}

function movimentosRainha (lin, col, tabuleiro, bloqueios = []) {
  return (
    moverNorte({ lin: lin + 1, col }, tabuleiro, bloqueios) +
    moverSul({ lin: lin - 1, col }, tabuleiro, bloqueios) +
    moverLeste({ lin, col: col + 1 }, tabuleiro, bloqueios) +
    moverOeste({ lin, col: col - 1 }, tabuleiro, bloqueios) +
    moverNordeste({ lin: lin + 1, col: col + 1 }, tabuleiro, bloqueios) +
    moverSudeste({ lin: lin - 1, col: col + 1 }, tabuleiro, bloqueios) +
    moverNoroeste({ lin: lin + 1, col: col - 1 }, tabuleiro, bloqueios) +
    moverSudoeste({ lin: lin - 1, col: col - 1 }, tabuleiro, bloqueios)
  )
}

module.exports = movimentosRainha
