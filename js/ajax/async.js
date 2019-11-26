// (async () => {
//   function getName() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('Jefferson')
//       }, 3000)
//     })
//   }
//
//   const name = await getName()
//   console.log(name)
// })()

// async function getDate() {
//   return Promise.resolve('Fon')
// }

// getDate().then((response) => console.log(response))

(async () => {
  function getName(name) {
    return new Promise((resolve, reject) => {
        if (name) {
          resolve(name)
        } else {
          reject("Sem nome")
        }
    })
  }

  try {
    const name = await getName('Jefferson')
    console.log('name')
    const name2 = await getName(name)
    console.log('name2')
    const name3 = await getName(name2)
    console.log('name3')
    const name4 = await getName(name3)
    console.log('name4')
  } catch (error) {
    console.log('Deu erro:', error)
  }
})()
