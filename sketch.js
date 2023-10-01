let pemain1, pemain2
let sfxLoncat
let bg
let musik
let imgpemain1, imgpemain2

function preload() {
  soundFormats('mp3')
  musik = loadSound('sound.mp3')
  sfxLoncat = loadSound('jump.mp3')
  bg = loadImage('lapang.jpeg')
  imgpemain1 = loadImage('player1.jpeg')
  imgpemain2 = loadImage('player2.jpeg')
}

function setup() {
  createCanvas(600, 400);
  
  
  pemain1 = new Pemain(250, imgpemain1)
  pemain2 = new Pemain(150, imgpemain2)
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