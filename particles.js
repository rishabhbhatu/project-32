class Particles {
  constructor(x,y,radius) {
      var options = {
          restitution:0.4
      }
      this.radius=radius

      this.body = bodies.circle(x,y,this.radius,options);
      this.color=color=color(random(0,255),random(0,255),random(0,255));
      World.add(world,this.body);

  } 
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push ();
    translate (pos.x, pos.y);
    rotate (angle);
    noStroke();
    fill ("white");
    ellispeMode(RADIUS);
    ellispe(0,0,this.radius,this.radius);
    Pop();
  }
};