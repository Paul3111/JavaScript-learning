const returnFour = () => {
    return 4;
  };
  
  const something = returnFour;

  console.log(something) /* returns [Function: returnFour] */

returnFour /* it doesn't return 4 ...*/

console.log(4) /* this one does return 4 */

