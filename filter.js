//filter function to filter out the values smaller than 3000 and also the non-numeric values
const prices = [1200, 3100, null, 4500, 6000, "Thousand", 50,210, 14000]

function checkPrice(element) {
  return element > 3000 && !Number.isNaN(element);
}

let filteredPrices = prices.filter(checkPrice);
console.log(filteredPrices);

// using arrow function
let newPrices = prices.filter((price) => (price > 2000 && !Number.isNaN(price)));
console.log(newPrices);