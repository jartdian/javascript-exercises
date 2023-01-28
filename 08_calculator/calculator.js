const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
  if(arr.length > 0) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
      result += arr[i]
    }
    return result
  }
  return 0
};

const multiply = function(arr) {
  if(arr.length > 0) {
    let result = 1
    for (let i = 0; i < arr.length; i++) {
      result *= arr[i]
    }
    return result
  }
  return 0
};

const power = function(a,num) {
	return a**num
};

const factorial = function(num) {
  if(num === 0) {
    return 1
  }
  else if(num === 1) {
    return 1
  }
  else if(num === 2) {
    return 2
  }
	let arr = Array.from({length: num}, (_,index) => num - index )
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i]
  }
  return result
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
