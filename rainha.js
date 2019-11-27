'use strict';

const readlineSync = require('readline-sync');
const rainhaMovimentos = require('./rainha-movimentos')

main();

// Complete a funcao abaixo:
function ataquesRainha(n, k, l_r, c_r, obstaculos) {
  return rainhaMovimentos(l_r, c_r, n, obstaculos);
}

function main() {
  console.log("Inicio...\n");

  const nk = readlineSync.question().split(' ');

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const l_rC_r = readlineSync.question().split(' ');

  const l_r = parseInt(l_rC_r[0], 10);

  const c_r = parseInt(l_rC_r[1], 10);

  var obstaculos;
  if (k > 0) {
    obstaculos = Array(k);
  }

  for (let i = 0; i < k; i++) {
    obstaculos[i] = readlineSync.question().split(' ').map(obstaculosTemp => parseInt(obstaculosTemp, 10));
  }

  console.log("Tabuleiro: " + n + "x" + n);
  console.log("Rainha: " + l_r + ", " + c_r);
  console.log("Obstaculos: " + obstaculos);

  let result = ataquesRainha(n, k, l_r, c_r, obstaculos);

  console.log("Ataques Rainha: " + result);

}
