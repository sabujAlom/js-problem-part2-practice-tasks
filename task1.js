/**
 * Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */
function numberFrequency (numbers){

    let lowestNumber = numbers[0];
    for(const number of numbers){
        if(number < lowestNumber){
            lowestNumber = number;
        }
    }
    return lowestNumber ;
}


const heights2 = [167, 190, 120, 165, 137];
console.log(numberFrequency(heights2));

