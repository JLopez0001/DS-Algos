/*-----------------------------------------------------------------
Challenge: 16-findHighestPriced
Difficulty:  Intermediate  
Prompt:
- Write a function named findHighestPriced that accepts a single array of objects.
- The objects contained in the array are guaranteed to have a price property holding a numeric value.
- The function should return the object in the array that has the largest value held in the price property.
- If there's a tie between two or more objects, return the first of those objects in the array.
- Return the original object, not a copy.
- DO NOT mutate the array, i.e., do not sort it
Examples:
findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 5 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
//=> { sku: 'c3', price: 50 } 
findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 50 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
//=> { sku: 'b2', price: 50 }
-----------------------------------------------------------------*/
// Your solution for 16-findHighestPriced here:

function findHighestPriced(arr) {
  let max = -Infinity;
  let name = "";
  for (const item of arr) {
    const { sku, price } = item;
    if (price > max) {
      max = price;
      name = sku;
    }
  }
  return { sku: name, price: max };
}
console.log(
  findHighestPriced([
    { sku: "a1", price: 25 },
    { sku: "b2", price: 50 },
    { sku: "c3", price: 50 },
    { sku: "d4", price: 10 },
  ])
);
