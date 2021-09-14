const sleep = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const getProducts = async () => {
  await sleep(500)
  return [
    { id: 1, name: 'First Product' },
    { id: 2, name: 'Second Product' },
    { id: 3, name: 'Third Product' },
  ]
}

export const makePurchase = async () => {
  await sleep(1000)
  return 'success'
}
