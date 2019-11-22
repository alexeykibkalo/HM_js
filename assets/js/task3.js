function digitReverse (number){
    if (number<10) {
        return number;
    }
    return Number(''+(number%10) + digitReverse(parseInt(number/10)));
}