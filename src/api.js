const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async () => {
  await sleep(500);
  return [
    { id: 1, name: "Apple 🍎" },
    { id: 2, name: "Orange 🍊" },
    { id: 3, name: "Pinapple 🍍" },
  ];
};

export const makePurchase = async () => {
  await sleep(1000);
  return "success";
};
