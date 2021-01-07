function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHight=300;


function draw() {
  background(255,255,255);  
  drawSprites();
}

for (var k = 0; k <=width; k = k + 80) {
  division.push(new Division(k,hight*divisionHight/2,10,divisionHight));
}
for (var j = 40;j <=wiedth;j=j+50)
{
  plinkos.push(new Plinko(j,75));
}
for (var j= 15;j <=width-10;j=j=50)
{
  plinkos.push(new Plinko(j,175));
}
