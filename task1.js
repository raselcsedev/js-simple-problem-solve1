function findLargest(first, second, third){
    if(first>second && first>third){
        return first;
    }
    else if(second>first && second>third){
        return second;
    }
    else {
        return third;
    }
}
const output = findLargest(30, 10, 5);
console.log('Largest input is '+output);