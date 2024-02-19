/*
Sam's house has an apple tree and an orange tree
that yield an abundance of fruit. Using the
 information given below, determine the number 
 of apples and oranges that land on Sam's house.
In the diagram below: The red region denotes the
house, where  is the start point, and  is the 
endpoint. The apple tree is to the left of the 
house, and the orange tree is to its right.
Assume the trees are located on a single point, 
where the apple tree is at point , and the orange
 tree is at point . When a fruit falls from its 
 tree, it lands  units of distance from its tree 
 of origin along the -axis. *A negative value of  
 means the fruit fell  units to the tree's left, 
 and a positive value of  means it falls  units 
 to the tree's right. 
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleCount = 0;
  let orangeCount = 0;

  for (const orange of oranges) {
    let distance = b + orange;
    if (distance >= s && distance <= t) {
      orangeCount++;
    }
  }

  for (const apple of apples) {
    let distance = a + apple;
    if (distance >= s && distance <= t) {
      appleCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
