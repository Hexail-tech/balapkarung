let pemain1, pemain2
let sfxLoncat
let bg
let musik

function preload() {
  soundFormats('mp3')
  musik = loadSound('sound.mp3')
  sfxLoncat = loadSound('jump.mp3')
  bg = loadImage('lapang.jpeg')
}

function setup() {
  createCanvas(600, 400);
  
  musik.play()
  
  pemain1 = new Pemain(220, 'red')
  pemain2 = new Pemain(height-90, 'blue')
}

function draw() {
 image(bg, 0, 0, width, height);
  
  
  pemain1.tampilkan()
  pemain2.tampilkan()
  
  pemain1.finish()
  pemain2.finish()
}



function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    pemain1.maju()
    sfxLoncat.play()
  }
  else if (keyCode === RIGHT_ARROW) {
    pemain2.maju()
    sfxLoncat.play()
  }
}