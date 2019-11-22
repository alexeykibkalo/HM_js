function sumOfDigit (number){
    if (number<10) {
        return number;
    }
    return (number%10) + sumOfDigit(parseInt(number/10));
}

function bracketsReturn(digit) {
    if(digit===1)
        return"()";
    return "("+ bracketsReturn(digit-1) +")";
}