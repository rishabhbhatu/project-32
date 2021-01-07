class Plinko {
    constructor(x,y,radius){
        var options = {
            restitution:0.4
        }
        this.radius = radius;
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