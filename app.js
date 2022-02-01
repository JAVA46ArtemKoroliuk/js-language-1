/*jshint esversion: 6 */
const circle={radius:20, square:function(){return 3.14*(this.radius)**2}
, perimetr:()=>2*3.14*this.radius, toString: function(){
        return `radius of this circle is ${this.radius}`
}};
console.log(`shape = ${circle.square()}, perimetr = ${circle.perimetr()}`);
console.log(`circle ${circle}`);
const circle1 ={radius:20
, perimetr: function(){ 2*3.14*this.radius}, toString: function(){
        return `radius of this circle is ${this.radius}`;
}};
function Circle(radius){
        this.radius=radius;
}
Circle.prototype.square=function(){
      return  3.14*(this.radius**2);
}
Circle.prototype.perimetr=function(){
        return 2*3.14*this.radius;
}
Circle.prototype.toString=function(){
        return `radius of this circle is ${this.radius}`;
}
const circle10=new Circle(10);

console.log(circle10);