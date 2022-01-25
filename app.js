/*jshint esversion: 6 */
/*const ar20=[11,17,20,23,2];
const arEven=ar20.filter((n, i, a) =>a.length%2==0 ? n %2==0 : n %2==1);
console.log(arEven);
const res=ar20.reduce((res,cur)=> res+cur,0);
console.log(res);
const max=ar20.reduce((max,cur)=>cur>max?cur :max,ar20[0])
console.log(max);*/
const person1={id:123,name:"moshe",address:{city:"lod",street:"sokolov"}};
const person2={id:123,name:"moshe",address:{city:"lod",street:"sokolov"}};
const person3=person1;
console.log(`person1==person2 is ${person1==person2}`);
console.log(`"123"==123 is ${"123"==123}`);
console.log(`"123"===123 is ${"123"===123}`);
console.log(`JSON.stringify(person1)===JSON.stringify(person2) is ${JSON.stringify(person1)===JSON.stringify(person2)}`);
console.log(JSON.stringify(person1));
console.log(`name is person1 is "${person1.name}"`);
console.log(`live person1 in city "${person1.address.city}"`);
Object.keys(person1).forEach(k=> console.log(k));
Object.values(person1).forEach(k=> console.log(k));
Object.entries(person1).forEach(k=> console.log(k));
function createAddress(city,street){
   // {city:city, street:street} <=> {city,street}
    return {city:city, street:street}
}
function createPerson (id,name,address)






