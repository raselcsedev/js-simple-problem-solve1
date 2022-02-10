function smallestElement(number){
    let smallest = number[0];
    for(let i =0; i<number.length; i++){
        element = number[i];
        if(element<smallest){
            smallest=element;
        }
    }
    return smallest;
}
const myArray = [12, 31, 40, 20, 60, 90]
const result = smallestElement(myArray);
console.log('lowest element of array is ' +result);
