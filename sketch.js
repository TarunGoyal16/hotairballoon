var ballon
var ballonposition,Database;
var position
var bgimage,ballonimage

function preload(){
    bgimage=loadImage("cityImage.png")
    ballonimage=loadImage("hotairballoon2.png")
}

function setup(){
    createCanvas(1200,800)
    Database=firebase.database()
    ballon=createSprite(100,500,30,30)
    ballon.addImage(ballonimage)
    ballon.scale=0.7
    ballonposition=Database.ref("ballon/position")
    ballonposition.on("value",readPosition)
}
function readPosition(data){
    position=data.val()
    ballon.x=position.x
    ballon.y=position.y
}
function writePosition(x,y){
    Database.ref("ballon/position").set({
        "x":position.x+x,
        "y":position.y+y
    })
}
function draw(){
    background(bgimage)
    if(keyDown("right"))
    writePosition(1,0)
    
    if(keyDown("left"))
    writePosition(-1,0)

    if(keyDown("down"))
    writePosition(0,1)

    if(keyDown("up"))
    writePosition(0,-1)

    drawSprites()
}