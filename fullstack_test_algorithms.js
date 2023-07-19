const prompt = require('prompt-sync')()

function createSquareMatrix (particle, matrixOrder) {
  if (matrixOrder < 4) {
    return console.log('Matrix order less than 4 are not allowed.')
  }

  if (particle === 'n') {
    const AccNeutron = Array(matrixOrder).fill(Array(matrixOrder).fill(1))
    const SubstitutesFirstVector = Array(matrixOrder).fill(particle)
    AccNeutron.splice(0, 1, SubstitutesFirstVector)

    return console.log(AccNeutron);
  }
  
  if (particle === 'e') {
    const AccElectron = Array(matrixOrder).fill(Array(matrixOrder).fill(1).fill(particle, matrixOrder - 1))
    const SubstitutesFirstVector = Array(matrixOrder).fill(particle)
    AccElectron.splice(0, 1, SubstitutesFirstVector)

    return console.log(AccElectron);
  }

  if (particle === 'p') {
    const AccProton = Array(matrixOrder).fill(Array(matrixOrder).fill(particle).fill(1, 1, matrixOrder - 1))

    const SubstitutesFirstVector = Array(matrixOrder).fill(particle)
    const SubstitutesLastButOneVector = Array(matrixOrder).fill(particle).fill(1, 1, matrixOrder - 2)
    const SubstitutesLastVector = Array(matrixOrder).fill(particle).fill(1, matrixOrder - 1)

    AccProton.splice(0, 1, SubstitutesFirstVector)
    AccProton.splice(matrixOrder - 2, 1, SubstitutesLastButOneVector)
    AccProton.splice(matrixOrder - 1, 1, SubstitutesLastVector)

    return console.log(AccProton);;
  }

  const cyclotron = Array(matrixOrder).fill(Array(matrixOrder).fill(1))

  return console.log(cyclotron);
}

const particle = String(prompt('Insert one of the possible particles to accelerate (n, e or p): '))
const matrixOrder = Number(prompt('Insert the matrix order: '))

createSquareMatrix(particle, matrixOrder)