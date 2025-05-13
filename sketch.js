let emitters = []
let G

function setup() {
  createCanvas(400, 600);
  frameRate(30)
  emitters.push( new Emitter( width/2, 30 ) )
  //change wind direction for particles
  G = createVector(0.25,0.5)
  ellipseMode(RADIUS)
  noStroke()
}

function draw() {
  background(220);
  for( let e of emitters ) {
    e.update()  
  }
}

class Emitter {
  constructor( x, y ) {
    this.x = x
    this.y = y
    this.particles = []
    for( let i = 0; i < 20; i++ ) {
    //  this.particles.push( new SquareParticle(this.x, this.y) )//
  //    this.particles.push( new Particle(this.x, this.y) )//
//      this.particles.push( new RandomSizeParticle(this.x, this.y) )//
      this.particles.push( new RandomSquareParticle(this.x, this.y) )
    }    
  }
  
  update() {
    this.particles = this.particles.filter( p => !p.isDead() )

    // draw all the live ones
    for( let p of this.particles ) {
      p.applyForce(G)
      p.update()
      p.draw()    
    }

    // add new ones
    //this.particles.push( new SquareParticle(this.x, this.y) )  // 
 //   this.particles.push( new Particle(this.x, this.y) )//    
//    this.particles.push( newRandomSizeParticle(this.x, this.y) )   //
    this.particles.push( new RandomSquareParticle(this.x, this.y) )   
  }
}

function mouseClicked() {
  emitters.push( new Emitter(mouseX,mouseY) )
}