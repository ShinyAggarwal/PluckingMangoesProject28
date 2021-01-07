class Tree{
    constructor(x,y){
		this.treeWidth=450;
		this.treeHeight=600;
		this.wallThickness=10;
        this.image = loadImage("tree.png");
        this.bottomBody=Bodies.rectangle(x, y, this.treeWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(0, y-this.treeHeight/2, this.wallThickness, this.treeHeight, {isStatic:false})
		this.rightWallBody=Bodies.rectangle(x+this.treeWidth/2, y-this.treeHeight/2, this.wallThickness, this.treeHeight, {isStatic:false})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
    }

    display(){
        var pos=this.bottomBody.position;
        push();
        translate(pos.x, pos.y+10);
        imageMode(CENTER);
        image(this.image, 0, -this.treeHeight/2, this.treeWidth, this.treeHeight);
        pop();
    }
}
