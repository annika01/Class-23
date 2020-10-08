class Ground{
    constructor(){
        var option = {
            isStatic: true
        }
        this.body= Bodies.rectangle(200, 380, 400,20, option)
        World.add(world, this.body)
    }
    display (){
        var poss= this.body.position 
        rectMode(CENTER)
        rect(poss.x, poss.y, 400,20)
    }
}