const businsess =780;
const army = 490;
const minister =280;
if(businsess>minister && businsess>army){
    console.log('Businsess is bigger than others.');
}
else if(army>businsess && army>minister){
    console.log('Army is bigger than others.');
}else{
    console.log('Minister is bigger than others');
}

/* var maximum = Math.max(businsess, army, minister);
console.log(maximum);
 */

/* function findLargest(first, second){
    if(first>second){
        return first;
    }
    else{
        return second;
    }

}
const output = findLargest(355, 460);
console.log(output);


 */