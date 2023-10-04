class Pemain {
  constructor(x, y, imgkarakter) {
    this.imgkarakter = imgkarakter
    this.x = x
    this.y = y
    this.speed = 20
  }
  
  tampilkan() {
    image(this.imgkarakter, this.x, this.y, 50, 100);
    
  }
  
  maju() {
    this.x += this.speed
  }
  
  finish() {
    if (this.x > 520) {
      sfinish.play()
      textSize(30)
      textAlign(CENTER)
      text("FINISH", width/2, height/2)
      noLoop()
      
    }
  }
}