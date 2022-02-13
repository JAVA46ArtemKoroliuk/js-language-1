/*jshint esversion: 6 */
function concatinate(prefix) {
    return function (fix) {
        return prefix+fix;
    }
}
   const concatApp = concatinate('App - ');
const concatMessage = concatApp('Test status: Done');
    console.log(concatMessage);


function getRandomNumber(min,max){
    if(min>max){
        return max+Math.floor(Math.random()*(min-max))
    }
    else {
        return min+Math.floor(Math.random()*(max-min))
    }
}
console.log(getRandomNumber(10,11))

