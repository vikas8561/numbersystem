const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

  let primeArray = [];
  for(let i = 0; i < numbers.length; i++){
    let flag = true;
    for(let j = 2; j <= Math.sqrt(numbers[i]); j++){
        if(numbers[i] % j === 0){
            flag = false;
            break;
        }
    }
    if(flag === true){
        console.log(numbers[i] + " is Prime number");
        primeArray.push(numbers[i]);
    }else {
        console.log(numbers[i] + " is not a Prime number");
    }
    flag = true;
  }

  console.log(primeArray);
  
  let maximum = -Infinity;
  let minimum = Infinity;
  let sum = 0;
  for(let i = 0; i < primeArray.length; i++){
    sum = sum + primeArray[i];

    if(primeArray[i] > maximum){
        maximum = primeArray[i];
    }
    if(primeArray[i] < minimum){
        minimum = primeArray[i];
    }
  }
  
  console.log("maximum prime number in primeArray: " + maximum);
  console.log("minimum prime number primeArray: " + minimum);
  console.log("sum of primeArray is: " + sum);

