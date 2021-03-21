class paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, 50, 50 , options);
 		World.add(world, this.body);
		this.image = loadImage("paper.png");

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			fill("white")
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}
}