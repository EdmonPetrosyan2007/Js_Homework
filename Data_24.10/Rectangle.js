class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }


 area() {
   return this.width * this.height; 
 };

 perimeter() {
    return 2 * (this.width + this.height);
 };

};
const obj = new Rectangle(5, 15);

console.log("Area--> ", obj.area());
console.log("perimeter--> ", obj.perimeter());



