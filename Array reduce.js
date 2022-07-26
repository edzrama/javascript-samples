const orders = [2, 3, 1, 5];

function getBill(numberOfOrders) {
const pricePerCoffee = 1.25

const totalBill = numberOfOrders.reduce(
  (prev, current) => prev + current
);

    return `The total bill is $${totalBill * pricePerCoffee}`
}

console.log(getBill(orders));

