const canvas = document.querySelector('canvas');

console.log(canvas)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');


// // Rectangular
// c.fillStyle = "blue";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "yellow"
// c.fillRect(200, 300, 100, 100);
// c.fillStyle = "red";
// c.fillRect(600, 400, 100, 100);

// // Line
// c.beginPath();
// c.moveTo(150, 150);
// c.lineTo(250, 250);
// c.strokeStyle = "black";
// c.stroke();
// c.beginPath();
// c.moveTo(250, 250);
// c.lineTo(550, 750);
// c.strokeStyle = "yellow";
// c.stroke();

// Circle / Arc
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

// func to get a random color
// const randomColor = () => {
//     let code = "#";
//     const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
//     for (let a = 0; a < 6; a++) {
//         const randValue = values[Math.floor(Math.random() * values.length)];
//         code += randValue;
//     }
//     return code;
// }

// Randominzing Values
// for (let i = 0; i < 100; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = randomColor();
//     c.stroke();
// }

class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "white";
        c.stroke();
    }
    update() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}


const circlesArray = [];

for (let i = 0; i < 100; i++) {
    let radius = 20;
    let x = Math.random() * (window.innerWidth - radius * 2) + radius;
    let y = Math.random() * (window.innerHeight - radius * 2) + radius;
    let dx = (Math.random() - .5);
    let dy = (Math.random() - .5);
    circlesArray.push(new Circle(x, y, dx, dy, radius));

}

const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circlesArray.length; i++) {
        circlesArray[i].update();
    }
}

animate();