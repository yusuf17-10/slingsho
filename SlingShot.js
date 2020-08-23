class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 20
        }
        this.pointB=pointB;
        this.slingShot = Constraint.create(options);
        World.add(world,this.slingShot);


       
    }

    fly(){
       this.slingShot.bodyA=null;
    }


    


    display(){
    if(this.slingShot.bodyA){
        var pointA=this.slingShot.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y)
       }
    }
}