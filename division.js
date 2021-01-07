class Division{
    constructor(x,y,width,hieght){
        var options = {

            isStatic: true
        }
        this.body = bodies.rectangle(x,y,width,hieght,options);
        this.width = width;
        this.hieght = hieght;
        AudioWorkletNode.add (world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill ("white");
        rect(pos.x, pos.y, this.width, this.hieght);
    }
};