var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
   fixedRect= createSprite(400, 200, 100, 50);
    movingRect = createSprite(100, 300, 50, 100);
     fixedRect.shapeColor = "lightblue"
      movingRect.shapeColor = "lightblue"
     } 
     
     function draw() {
        background(0); 
        movingRect.x = mouseX; 
        movingRect.y = mouseY; 
        console.log(fixedRect.x - movingRect.x) 
        if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
        fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2&&
        movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 &&
        fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2){
       fixedRect.shapeColor = "yellow" 
       movingRect.shapeColor = "yellow" 
      }
       
       else{
       fixedRect.shapeColor = "lightblue" 
       movingRect.shapeColor = "lightblue" } 
       drawSprites(); 
      }