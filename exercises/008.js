// TODO: https://tech-docs.corndel.com/js/functions.html

/**
 * Returns 'fizz' if the number is divisible by 3,
 * 'buzz' if divisible by 5, and 'fizzbuzz' if divisible by both.
 *
 * Returns an empty string if the number is not divisible by 3 or 5.
 *
 * @param {number} num The number to be checked.
 * @returns {string} 'fizz', 'buzz', 'fizzbuzz' or ''
 */
export function fizzBuzz(num) {
  if (num % 3 == 0 && num % 5 == 0){
    return "fizzbuzz";
  } else if (num % 3 == 0){
    return "fizz";
  } else if (num % 5 == 0){
    return "buzz";
  }
  
  return ""; 
  }
  





  // TODO: return 'fizz' if num is divisible by 3
  // TODO: return 'buzz' if num is divisible by 5
  // TODO: return 'fizzbuzz' if num is divisible by both 3 and 5
  // TODO: return an empty string if num is not divisible by 3 or 5

