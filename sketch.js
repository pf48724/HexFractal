function setup() {
  createCanvas(600, 600);
}

function draw() {
  background('white');
  noFill();
  stroke(0);
  rect(0, 0, width, height);
  
  let bigHexRad = 100;
  let ox1 = mouseX - 300;
  let oy1 = mouseY - 300;
  drawHexagons(300, 300, bigHexRad, ox1, oy1, 5);
  
  fill('red');
  noStroke();
  circle(mouseX, mouseY, 5);
}

function drawHexagons(x, y, radius, ox, oy, depth) {
  if (depth <= 0) {
    return;
  }
  
  noFill()
  //stroke(getDepthColor(depth));
  fill("black");
  drawHexagon(x, y, radius);
  
  let smallHexRad = radius / 3;
  for (let i = 0; i < 6; i++) {
    let angle = PI / 3 * i;
    let rotateOx = ox * cos(angle) - oy * sin(angle);
    let rotateOy = ox * sin(angle) + oy * cos(angle);
    let smallX = x + rotateOx;
    let smallY = y + rotateOy;
    drawHexagon(smallX, smallY, smallHexRad);
    let smallerOx = ox / 3;
    let smallerOy = oy / 3;
    drawHexagons(smallX, smallY, smallHexRad, smallerOx, smallerOy, depth - 1);
  }
}

function drawHexagon(x, y, radius) {
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = PI / 3 * i;
    let xPos = x + radius * cos(angle);
    let yPos = y + radius * sin(angle);
    vertex(xPos, yPos);
  }
  endShape(CLOSE);
}

function getDepthColor(depth) {
  let hexColor;
  switch(depth) {
    case 1:
      hexColor = color(164, 120, 100);
      break;
    case 2:
      hexColor = color(255, 233, 0);
      break;
    case 3:
      hexColor = color(250, 207, 57);
      break;
    case 4:
      hexColor = color(75, 0, 130);
      break;
    case 5:
      hexColor = color(85, 107, 47);
      break;
    default:
      hexColor = color(0, 255, 255);
  }
  return hexColor;
}