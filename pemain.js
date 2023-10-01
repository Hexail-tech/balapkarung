class Pemain {
  constructor(y, player) {
    this.player = player
    this.y = y
    this.speed = 20
  }
  
  tampilkan() {
    image(imgpemain1, 25, 250, 50, 100);
    image(imgpemain2, 25, 150, 50, 100);
  }
  
  maju() {
    this.player += this.speed
  }
  
  finish() {
    if (this.player > 550) {
      textSize(30)
      textAlign(CENTER)
      text("FINISH", width/2, height/2)
      noLoop()
      
    }
  }
}