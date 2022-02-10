/* let numbers =[3, 5, 7, 9, 4];
let sum =0;
for(let i=0; i<numbers.length;i++){
    let number = numbers[i];
    sum = sum+number;
    
}
console.log(sum); */

/* function getArray(number){
    let sum =number[0];
    for(let i =0; i<number.length; i++){
        let element = number[i];
        sum =sum + element;
    }
    return sum;
}
const result = getArray([3, 4, 2, 6]);
console.log(result); */





// Quiz 21

/* const number = -78; 
const answer = Math.abs(number); console.log(answer); */

/* var a=2;
 var b=3; 
 if(a<b){
     console.log("Hello");
    }

    function add(a, b){ 
        return a + b;
    } */
/* 
    function add(a, b){
        return a + b;
      }
      console.log(add("adam" + "eve")) */
      

  /*     var result =100 + Math.random()*100;
      console.log(result) */

      var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if( letter == 'a'){
    count++;
  }
}
console.log(count)
