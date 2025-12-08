class Shape {
    constructor(color) {
        if (new.target == Shape) {
            throw new Error("Error: Shape");
        }
        this.color = color;
    }

    area() {
        throw new Error("Error: area()");
    }

    perimeter() {
        throw new Error("Error: perimeter()");
    }

    describe() {
        console.log(`color ==> ${this.color}`);
        console.log(`Area ==> ${this.area()}`);
        console.log(`Perimeter ==> ${this.perimeter()}`);
    }
}   

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class Triangle extends Shape {
    constructor(color, a, b, c) {
        super(color);
        this.a = a;
        this.b = b;
        this.c = c;
    }
    area() {
        const S = (this.a + this.b + this.c) / 2;
        return Math.sqrt(S * (S - this.a) * (S - this.b) * (S - this.c));
    }
    perimeter() {
        return this.a + this.b + this.c;
    }
}

const circle = new Circle("black", 5);
const rectangle = new Rectangle("white", 4, 6);
const triangle = new Triangle("red", 3, 4, 5);

circle.describe();
rectangle.describe();
triangle.describe();
