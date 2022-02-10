function findLargest(number){
   let largest =number[0];
    for(let i=0; i<number.length; i++){
        let element = number[i];
        
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
let myArray =[12, 34, 56, 21, 45, 67, 10];
let myArray2 =[-12, -34, -56];
let result = findLargest(myArray2);
console.log(result);