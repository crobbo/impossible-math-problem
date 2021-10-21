let numberList = [...Array(99999).keys()]

let filteredList = numberList.filter( num => checkNum(num))

function checkNum(num) {
    str = num.toString();
    return checkEachDigit(str)
}

function checkEachDigit(str) {
    // console.log(str)
    if (str.includes("0")) {
        return false;
    } else if (str.includes("1")) {
        return false;
    } else if (str.includes("4")) {
        return false;
    } else if (str.includes("6")) {
        return false;
    } else if (str.includes("8")) {
        return false;
    } else if (str.includes("9")) {
        return false;
    } else {
        return true;
    }
}

// group list of eligible numbers by number of digits
let twoDigitList = filteredList.filter( num => (num.toString().length > 1 && num.toString().length < 3) )
let threeDigitList = filteredList.filter( num => (num.toString().length > 2 && num.toString().length < 4) )
let fourDigitList = filteredList.filter( num => (num.toString().length > 3 && num.toString().length < 5) )
let fiveDigitList = filteredList.filter( num => (num.toString().length > 4 && num.toString().length < 6) )


// Find all valid answers when a three digit number (U) times a 2 digit number (AB)
let productTwoThree = [];

function twoDigitsTimesThreeDigits(twoDigitArray, threeDigitArray) {
    array = []
    twoDigitArray.forEach(num1 => {
        threeDigitArray.forEach(num2 => {
           array.push(num1 * num2)
        })
    })
    productTwoThree = array.filter(num => (num.toString().length > 4 && num.toString().length < 6 && checkNum(num)));
}

// Find all valid answers when a three digit number times single digit (B)
let productThreeTimesB = [];

function threeDigitsTimesB(twoDigitList, threeDigitList) {
    array = [];
    threeDigitList.forEach( num1 => {
        twoDigitList.forEach( num2 => {
            array.push(num1 * secondDigit(num2));
        })
    })
    // console.log(array);
    productThreeTimesB = productThreeTimesB.filter( num => checkNum(num))
};

function secondDigit(num2) {
    str = num2.toString();
    number = parseInt(str[1])
    return number
}

// Find all valid answers when a three digit number times single digit (A)

let productThreeTimesA = []

function threeDigitsTimesA(twoDigitList, threeDigitList) {
    array = [];
    threeDigitList.forEach( num1 => {
        twoDigitList.forEach( num2 => {
            array.push(num1 * firstDigit(num2));
        })
    })
    productThreeTimesB = productThreeTimesB.filter( num => checkNum(num))
};


// function calls
twoDigitsTimesThreeDigits(twoDigitList, threeDigitList);
threeDigitsTimesB(twoDigitList, threeDigitList)

console.log(productTwoThree);
// No values that contain the allowed digits.
console.log(productThreeTimesA);
// No values that contain the allowed digits.
console.log(productThreeTimesB);




