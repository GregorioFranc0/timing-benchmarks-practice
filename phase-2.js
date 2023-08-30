const [addNums, addManyNums] = require("./phase-1");


function addNums10(increment) {

  const result = [];
  for (let i = increment; i <= (increment * 10); i += increment) {
    let res = addNums(i);

    result.push(res);

  }

  return result;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  const result = [];
  for (let i = increment; i <= (increment * 10); i += increment) {
    let res = addManyNums(i);

    result.push(res);

  }

  return result;

}

module.exports = [addNums10, addManyNums10];
