var largest = 0;

var calc = {
    add: function(num1, num2){
        return num1 + num2;
    },
    subtract: function(num1, num2){
        return num1 - num2;
    },
    multiply: function(num1, num2){
        return num1 * num2;
    },
    divide: function(num1, num2){
        return num1 / num2;
    },
    largestNumber: function(array){
        for (i=0; i < array.length; i++){
            if (array[i] > largest){
                largest = array[i];
            }
        }
        return largest;
    }
}

var arrNum = [34, 78, 12, 3, 56, 23, 67, 45, 26, 18, 35];

console.log(calc.add(12, 15));
console.log(calc.subtract(45, 34));
console.log(calc.multiply(23, 5));
console.log(calc.divide(81, 9));
console.log(calc.largestNumber(arrNum));