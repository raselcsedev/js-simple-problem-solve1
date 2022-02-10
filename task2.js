function findSmallest(first, second,third){
    if(first<second && first<third){
        return first;
    }
    else if(second<first && second<third){
        return second;
    }
    else {
        return third;
    }
}
const output = findSmallest(30, 7, 40);
console.log('Smallest number is '+output);
