//namespace the constraint object from matter.js in sketch.js file
//constraint.create helps us to create 2 connected bodies whose movements are dependent on each other
class Chain {
    //user needs to specify which 2 bodies needs to be connected hence the arguements here 
    //stiffness = how freely the bodies can move with respect to each other (0-1)
    //length = distance between 2 bodies
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.05,
            length:10
        }
        //create a constraint called as chain with the give options and add it to the world
        this.chain=Constraint.create(options);
        World.add(world,this.chain);

    }
    //display the constraint with the help of line 
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}