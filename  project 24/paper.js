class Paper{
    constructor( x,y,width,height){
        var opt={
            'restitution':0.8,
            'friction':0.3,
            'density':1.2
          }
         this.body=Bodies.rect(x,y,radius,opt);
          World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle);
        strokeWeight(4)
        stroke("green")
        fill("blue")
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop()
    }
}