
/** ************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num%3 === 0 && num%5 !== 0) {
    return 'Fizz';
  } else if (num%3 !== 0 && num%5 === 0) {
    return 'Buzz';
  } else if (num%3 === 0 && num%5 === 0) {
    return 'FizzBuzz';
  }
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let res = 1;
  for(let i = 1; i <= n; i++) {
    res = res*i;
  }
  return res;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  return [...new Array(n2 - n1 + 1).keys()].reduce((s, e) => s += n1 + e, 0);
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false 
 * in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  return ((a + b) > c) && ((b + c) > a) && ((a + c) > b) ? true : false;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  return rect1.top+rect1.height>=rect2.top&&rect1.left+rect1.width>=rect2.left;
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const a = Math.pow((circle.center.x-point.x), 2);
  return (a+Math.pow((circle.center.y-point.y), 2))<Math.pow(circle.radius, 2);
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  for (const symbol of str) {
    if (str.indexOf(symbol) === str.lastIndexOf(symbol)) {
      return symbol;
    }
  }
}


/**
 * Returns the string representation of math interval, specified by two points and 
 * include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const l_inc = isStartIncluded ? '[' : '(';
  const r_inc = isEndIncluded ? ']' : ')';
  return a>b?`${l_inc}${b}, ${a}${r_inc}`:`${l_inc}${a}, ${b}${r_inc}`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return Number(String(num).split('').reverse().join(''));
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const arr_ccn = String(ccn).split('');
  let summ = 0;
  if (arr_ccn.length%2 === 0) {
    for (let i = 0; i < arr_ccn.length; i++){
      if (i===0 || i%2 === 0) {
        if (arr_ccn[i] * 2 > 9) {
          arr_ccn[i] = arr_ccn[i] * 2 - 9;
        } else {
          arr_ccn[i] = arr_ccn[i] * 2;
        }
      }
    }
  } else {
    for (let i = 0; i < arr_ccn.length; i++){
      if (i%2 !== 0) {
        if (arr_ccn[i] * 2 > 9) {
          arr_ccn[i] = arr_ccn[i] * 2 - 9;
        } else {
          arr_ccn[i] = arr_ccn[i] * 2;
        }
      }
    }
  }
  arr_ccn.map(function(el){
    summ = summ + Number(el);
  });
  if (summ%10 === 0) {
    return true;
  }
  return false;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  return summ_digit(num) > 9 ? summ_digit(summ_digit(num)) : summ_digit(num);
}
function summ_digit(number){
  let summ = 0;
  const arr_num = String(number).split('');
  arr_num.map(function(el){
    summ = summ + Number(el);
  });
  return summ;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  return parenthesesAreBalanced(str);
}
function parenthesesAreBalanced(str){
  const parentheses = '[]{}()<>', stack = [];
  for (let i = 0; i < str.length; ++i){
    var bracePosition = parentheses.indexOf(str[i]), braceType;
    if (!~bracePosition) continue;
    braceType = bracePosition % 2 ? 'closed' : 'open';
    if (braceType === 'closed') {
      if (!stack.length||parentheses.indexOf(stack.pop())!==bracePosition - 1){
        return false;
      }
    } else {
      stack.push(str[i]);
    }
  }
  return !stack.length;
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
  const interval = endDate - startDate;
  if (interval/1000 <= 45) {
    return 'a few seconds ago';
  } else if(interval/1000 > 45 && interval/1000 <= 90) {
    return 'a minute ago';
  } else if (interval/1000/60 > 1.5 && interval/1000/60 <= 45) {
    return `${Math.round(interval/1000/60-0.0000000001)} minutes ago`;
  } else if (interval/1000/60 > 45 && interval/1000/60 <= 90) {
    return `an hour ago`;
  } else if (interval/1000/60/60 > 1.5 && interval/1000/60/60 <= 22) {
    return `${Math.round(interval/1000/60/60-0.0000000001)} hours ago`;
  } else if (interval/1000/60/60 > 22 && interval/1000/60/60 <= 36) {
    return `a day ago`;
  } else if (interval/1000/60/60/24 > 1.5 && interval/1000/60/60/24 <= 25) {
    return `${Math.round(interval/1000/60/60/24-0.0000000001)} days ago`;
  } else if (interval/1000/60/60/24 > 25 && interval/1000/60/60/24 <= 45) {
    return `a month ago`;
  } else if (interval/1000/60/60/24 > 45 && interval/1000/60/60/24 <= 345) {
    return `${Math.round(interval/1000/60/60/24/30-0.0000000001)} months ago`;
  } else if (interval/1000/60/60/24 > 345 && interval/1000/60/60/24 <= 545) {
    return `a year ago`;
  } else if (interval/1000/60/60/24 > 546) {
    return `${Math.round(interval/1000/60/60/24/365-0.0000000001)} years ago`;
  }
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of
 * specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  let res = '';
  const str = pathes[0].split('.')[0].split('/').slice(0, -1).join('/') + '/';
  for (let i = 0; i < str.length; i++) {
     
    if (pathes.every(elem => str[i] === elem[i])) {
      res += str[i];
    } else {
      break;
    }
  }
  return res[res.length-1] !== '/'?res.slice(0, res.lastIndexOf('/')+1):res;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const r_A = m1.length, r_B = m2.length,
    c_A = m1[0].length, c_B = m2[0].length, C = [];
  if (c_A !== r_B) return false;
  for (let i = 0; i < r_A; i++) C[i] = [];
  for (let k = 0; k < c_B; k++){ 
    for (let i = 0; i < r_A; i++){ 
      let t = 0;
      for (let j = 0; j < r_B; j++) t += m1[i][j]*m2[j][k];
      C[i][k] = t;
    }
  }
  return C;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const win_lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6]];
  const res_arr_X = new Array(), res_arr_0 = new Array();
  let arr_pos = new Array();
  function contains(where, what){
    for(var i=0; i<what.length; i++){
      if(where.indexOf(what[i]) === -1) return false;
    }
    return true;
  }

  for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++) {
      if (position[i][j] === undefined) {
        position[i][j] = ' ';
      }
    }
  }

  position.map(function(el, index){
    arr_pos = arr_pos.concat(el);
  });

  for (let i = 0; i < arr_pos.length; i++) {
    if (arr_pos[i] === 'X') {
      res_arr_X.push(i);
    } else if (arr_pos[i] === '0') {
      res_arr_0.push(i);
    }
  }

  const winer = win_lines.map(function(elem, index){
    if(contains(res_arr_X, elem)) {
      return 'X';
    } else if(contains(res_arr_0, elem)) {
      return '0';
    } else {
      return undefined;
    }
  });
  
  let res;
  winer.map(function(el, index){
    if(el !== undefined) {
      res = el;
    }
  });
  return res;
}
module.exports = {
  getFizzBuzz: getFizzBuzz,
  getFactorial: getFactorial,
  getSumBetweenNumbers: getSumBetweenNumbers,
  isTriangle: isTriangle,
  doRectanglesOverlap: doRectanglesOverlap,
  isInsideCircle: isInsideCircle,
  findFirstSingleChar: findFirstSingleChar,
  getIntervalString : getIntervalString,
  reverseString: reverseString,
  reverseInteger: reverseInteger,
  isCreditCardNumber: isCreditCardNumber,
  getDigitalRoot: getDigitalRoot,
  isBracketsBalanced: isBracketsBalanced,
  timespanToHumanString : timespanToHumanString,
  toNaryString: toNaryString,
  getCommonDirectoryPath: getCommonDirectoryPath,
  getMatrixProduct: getMatrixProduct,
  evaluateTicTacToePosition : evaluateTicTacToePosition
};