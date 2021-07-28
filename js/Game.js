class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(200,300);
    car2 = createSprite(400, 300);
    car3 = createSprite(600,300);
    car4 = createSprite(800, 300);
    car1.addImage (car1image);
    car2.addImage (car2image);
    car3.addImage(car3image);
    car4.addImage (car4image);
    cars = [car1,car2, car3, car4];
  }

  play(){
    form.hide();
    textSize(30);
    Player.getPlayerInfo();
    image(ground1image,0,-displayHeight*5,displayWidth,displayHeight*6);

    var index=0
    var x=180
    var y
    if(allPlayers !== undefined){
      for(var plr in allPlayers){
        index=index+1;
        x=x+200;
        y=displayHeight-allPlayers[plr].distance;
        cars[index-1].x=x
        cars[index-1].y=y
        if (index===player.index){
          fill("teal");
          ellipse(x,y,60,60)
          cars[index-1].shapeColor="red";
          camera.position.x=displayWidth/2
          camera.position.y=cars[index-1].y
        }
      }
      drawSprites();
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance>3800){
      gameState=2
    }
  }
}
