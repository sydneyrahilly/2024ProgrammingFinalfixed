let circleSize, posX, posY, offSet, numShapes, space;

class CircleDrawer {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.angle = 0;
  }

  draw() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    let r = map(sin(this.size * 0.05), -1, 1, 100, 255);
    let g = map(cos(this.size * 0.05), -1, 1, 100, 255);
    let b = map(sin(this.size * 0.1), -1, 1, 100, 255);
    stroke(r, g, b);
    noFill();
    ellipse(0, 0, this.size, this.size);

    this.size += this.speed;
    this.angle += 0.05;

    if (this.size > width || this.size > height) {
      this.size = 50;
      this.angle = 0;
    }

    pop();
  }
}

function setup() {
  createCanvas(600, 600);
  circle = new CircleDrawer(width / 2, height / 2, 50, 1);
}

function draw() {
  let c1 = color(255, 100, 200);  // pink
  let c2 = color(0, 100, 255);    // blue
  
  let inter = map(sin(frameCount * 0.01), -1, 1, 0, 1);

  background(lerpColor(c1, c2, inter)); //lerpcolor makes a smooth transitions between colors :D

  circle.draw();
}
