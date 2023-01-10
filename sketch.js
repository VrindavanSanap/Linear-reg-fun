var data = [];
var m = 1
var b = 0

function setup() {
    createCanvas(1000, 1000)
    background(0)     //Black
}

function gradientDescent(){
    /*
        Stocastic Gradient descent
    */
    for (let i = 0; i< data.length; i++){
        let y = data[i].y
        let x = data[i].x

        let guess = m * x +b
        let error = guess - y

        m += -2 * error * x *0.01
        b += - error * 0.01

    }

   
}

function drawLine(m, b){
    let x1 = 0;    
    let y1 = m * x1 + b;
    let x2 = 1;
    let y2 = m * x2 + b;

    // rescale variables
    x1 = map(x1, 0, 1, 0, width)
    y1 = map(y1, 0, 1, height, 0)

    x2 = map(x2, 0, 1, 0, width)
    y2 = map(y2, 0, 1, height, 0)
    
    background(0)
    line(x1, y1, x2, y2)
    drawPoints()
}
function drawPoints(){

    // draw points
    for (let i = 0; i < data.length; i++){
        let xi = map(data[i].x, 0, 1, 0, width)
        let yi = map(data[i].y, 0, 1, height, 0)
        ellipse(xi, yi, 8, 8)
    }
}

function mousePressed(){

    // add point to data
    let x = map(mouseX, 0, height, 0, 1)
    let y = map(mouseY, 0, height, 1, 0)
    let point = createVector(x, y)
    data.push(point)

    background(0) //clear previous canvas
    fill(255)     // white color for elements
    stroke(255)
     
drawPoints()
}



function draw(){ 
    if (data.length > 1){       
    gradientDescent()
    drawLine(m, b)
    }
}
