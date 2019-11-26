function getName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Algo deu errado')
    }, 3000)
  })
}function getName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Algo deu errado')
    }, 3000)
  })
}

getName()
  .then((response) => getName(response))
  .catch((error) => console.log('Erro:', error))

console.log('Olá')
