
function initialise() {
    fetch("https://www.colr.org/json/colors/random/25")
        .then(function (response) {
            response.json()
                .then(function (json) {
                    
                    Car.bodyColour=bodyColourVar.getElementById(id);
                    console.log(print(bodyColourVar));
                });
        });
}
initialise();

class Car {

    constructor(p,bodyColourVar,) {

        this.x = (p && p.x) || 0;
        this.y = (p && p.y) || 0;
        this.height = (p && p.height) || 150;
        this.length = (p && p.height) || 200;
        this.wheelColour = "blue";
        this.windowColour = "blue";
        this.name = (p && p.name) || "0";
        //this.bodyColour = bodyColourVar;
        // this.xDirection = params.xDirection || 10;
    

    }


    move() {

        this.x += xDirection;


    }

    drawCircle(x, y, size, colour) {
        ctx.beginPath();
        ctx.fillStyle = colour;
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();

    }

    draw() {

        let s = this.height / 10;

        console.log(`Car is ${this.height}, each square is ${s} pixels`);

        //car's wheels
        this.drawCircle(this.x + (s * 3), this.y + (s * 6), 15, this.wheelColour)
        this.drawCircle(this.x + (s * 8), this.y + (s * 6), 15, this.wheelColour)

        //car's body
        ctx.fillStyle = "black";
        ctx.fillRect(this.x + (s * 1), this.y + (s * 1), (s * 9), (s * 4));

        //car's windows
        ctx.fillStyle = this.windowColour;
        ctx.fillRect(this.x + (s * 2), this.y + (s * 2), (s * 2), (s * 2));
        ctx.fillRect(this.x + (s * 7), this.y + (s * 2), (s * 2), (s * 2));
        ctx.fill();

        //car's number
        ctx.font = `${s * 2}px sans-serif`;
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.fillText(this.name, this.x + (s * 5.5), this.y + (s * 3.5));
        ctx.strokeStyle = "white";
        ctx.strokeText(this.name, this.x + (s * 5.5), this.y + (s * 3.5));

        

    }
}

// function fetchColourJSON() {
//     await foo()
//     const response = await fetch('https://www.thecolorapi.com/id')
//     const colourData = await response.json()
// }
// var parsedData=JSON.parse(colourData);

// fetch('https://www.colr.org/json/color/random')
//     .then(parsedData = document.getElementById("code"));













// function createCar(name, colour) {
//     c = new Car({
//         speed: random(1, 6),
//         colour: "#" + colour[0].hex,
//         x: 900,
//         name:this.name,
//         xDirection: random(10, -10)


//     })
// }



let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

if (ctx) {

    //finish line
    ctx.fillRect(50,0,15,800)

    //cars    
    let car1 = new Car({
        name: "1",
        x: 900,
    })
    car1.draw();


    let car2 = new Car({
        name: "2",
        x: 900,
        y: 200,
    })
    car2.draw();


    let car3 = new Car({
        name: "3",
        x: 900,
        y: 400

    })
    car3.draw();

    let car4 = new Car({
        name: "4",
        x: 900,
        y: 600


    })
    car4.draw();
    if(animateCar()){

    }

}

function random(min, max) {
    //return random value in range min - max
    return num = Math.floor(Math.random() * (max - min + 1)) + min;
}




function animateCar() {
    c.draw();
    c.move();
    requestAnimationFrame(animateCar);


}