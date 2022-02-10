/* let fibo = [0, 1];
for(let i = 2; i<=10; i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
}
console.log(fibo); */

function fibonacci(num){
    if( typeof num !='number'){
        return 'Please give a number ';
    }
    if(num<2){
        return 'Please give a positive number greater than 1';
    }
    const fibo = [0,1];
    for(let i = 2; i<=num; i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}
const fiboSeries = fibonacci(3);
console.log(fiboSeries);