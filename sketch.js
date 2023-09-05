let pemain1, pemain2

function setup() {
  createCanvas(600, 400);
  
  pemain1 = new Pemain(100, 'red')
  pemain2 = new Pemain(height-100, 'blue')
}

function draw() {
  background(220);
  
  pemain1.tampilkan()
  pemain2.tampilkan()
  
  pemain1.finish()
  pemain2.finish()
}



function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    pemain1.maju()
  }
  else if (keyCode === RIGHT_ARROW) {
    pemain2.maju()
  }
}