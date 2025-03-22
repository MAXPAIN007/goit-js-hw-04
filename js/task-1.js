//variant 1
function isEnoughCapacity(products, containerSize) {
  let totalValue = 0;
  for (const key in products) {
    totalValue += products[key];
  }
  if (totalValue <= containerSize) {
    return true;
  } else {
    return false;
  }
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

//variant 2
// function isEnoughCapacityMy(products, containerSize) {
//   const total = Object.values(products).reduce((sum, item) => sum + item, 0);
//   if (total === 0) return false;

//   return total <= containerSize
//     ? `${total} items will be packed!`
//     : `Please reduce the number of items!`;
// }

// console.log(isEnoughCapacityMy({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
