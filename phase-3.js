const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  console.time(`timer1`);
  const result = [];
  for (let i = increment; i <= (increment * 10); i += increment) {

    let res = addNums(i);

    result.push(res);
    console.timeLog(`timer1`)
  }
  console.timeEnd(`timer1`)
  return result;
  // Then, add timing code

  // Your code here

}


function addManyNums10Timing(increment) {

  const result = [];
  for (let i = increment; i <= (increment * 10); i += increment) {
    let startTime = Date.now();
    let res = addManyNums(i);
    let endTime = Date.now();
    result.push(res);
    console.log(`${endTime - startTime}`);

  }

  return result;

  // Then, add timing code

  // Your code here

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
