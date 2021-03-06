const validateLuhnNumber = (number) => {
  const numbers = number.split('').reverse();
  let sum = 0;
  numbers.forEach((item, index) => {
    if (index % 2 === 0) {
      sum+= parseInt(item);
    } else {
      let evenNum = parseInt(item) * 2;
      if ( evenNum > 9) evenNum = evenNum - 9;
      sum+= evenNum; 
    } 
  });
  return sum % 10 === 0;
}

const generateLuhnNumber = (length) => {
  const generateRandomNumberString = () => {
    let string = '';
    while(string.length !== length) {
      string += Math.floor(Math.random() * 10);
    }
    return string;
  }
  const num = generateRandomNumberString();
  if (validateLuhnNumber(num)) return num;
  else return generateLuhnNumber(length);
}

module.exports = {
  generateLuhnNumber,
  validateLuhnNumber,
}