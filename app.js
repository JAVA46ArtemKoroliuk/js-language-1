/*jshint esversion: 6 */
const arr=[2,5,8,4,9,4,16];
function myForEach(array, callback) {
        for (let i = 0; i < array.length; i++) {
                callback(array[i], i, array);
        }
}
myForEach(arr, n=>console.log(n));

function myFiltr(array,callback){
    const res=[];

if(myForEach(array,callback.call(n,i,a))==true) {

      res.push(array[i]);  
}
 
return res;
}
function big(max){return big>10;}
const arr10=arr.myFilter(big);
console.log(arr10);

function myReduce(array,callback,initialResult){
        let i=0;
        if(arguments.length<2){
                i=1;
                result=array[0];
        }
function reduce1(n,i,a){
        result=
}
/*
function forEachCall(n, i, a) {
        res.push(callback(n, i, a));
}
myForEach(array, forEachCall);
return res;*/

//////////////////////////////////////////
function createAddress(city, street) {
        //{city: city, street: street} <=> {city, street}
        return {city, street}
}
function createPerson(id, name, address) {
        return {id, name, address};
}
const persons = [
        createPerson(123, "Vasya", createAddress("Rehovot","Parshani")),
        createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")),
        createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")),
        createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
]