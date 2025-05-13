class Particle {
  constructor(x,y) {
    this.position = createVector(x,y)
    this.velocity = p5.Vector.random2D()
    this.acceleration = p5.Vector.random2D()
    this.r = 10
    this.lifespan = 1
  }
  
  update() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)   
    this.acceleration.mult(0)
    this.lifespan -= 0.01
  }
  
  isDead() {
    return this.lifespan < 0
    // if( this.lifespan < 0 ) {
    //   return true 
    // }
    // return false
  }
  
  draw() {
    let blueVal = Math.floor(Math.random()*255)
    let rgbaString = `rgba(0,0,${blueVal},${this.lifespan})`
    fill(rgbaString)
    circle(this.position.x,this.position.y,this.r)
  }
  
  // f is a p5.Vector
  applyForce(f) {
    this.acceleration.add(f)
  }
  
  
  static createStandardParticleAt(x,y) {
    return new Particle(
      x,y
    )
  }
}
class SquareParticle extends Particle {
  constructor(x,y) {
    super(x,y)
    
  }
  draw() {
    let blueVal = Math.floor(Math.random()*255)
    let rgbaString = `rgba(0,0,${blueVal},${this.lifespan})`
    fill(rgbaString)
    square(this.position.x,this.position.y,this.r)
  }
  static createSquareParticleAt(x,y) {
    return new SquareParticle(
      x,y
    )
  }
}
class RandomSizeParticle extends Particle {
  constructor(x,y) {
    super(x,y)
    this.r = Math.random()*15
    
  }
  static createRandomSizeParticleAt(x,y) {
    return new RandomSizeParticle(
      x,y
    )
  }
}
class RandomSquareParticle extends SquareParticle {
  constructor(x,y) {
  super(x,y)
    this.r = Math.random()*15
    
  }
  static createRandomSquareParticleAt(x,y) {
    return new RandomSquareParticle(
      x,y
    )
  }
}