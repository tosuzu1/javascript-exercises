const add = function(x,y) {
  return x + y;
	
};

const subtract = function(x , y) {
  return x - y;
	
};

const sum = function(arr) {
  let result = 0;
  for (i in arr) {
    result += arr[i];
  }
  return result;
	
};

const multiply = function(x, y) {
  let result = 1;
  if (arguments.length === 2) {
    return x * y;
  }
  else if (Array.isArray(x)) {
    for(i in x) {
      result *= x[i];
    }
    return result;
  }
  else {
    return "ERROR";
  }
  
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(val) {
  result = 1;
  for (let i = 1; i <= val; i+= 1) {
    result *= i;
  }
  return result;
	
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
