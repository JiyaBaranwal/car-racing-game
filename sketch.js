var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1, car2, car3, car4;
var cars = [];
var form, player, game;
var car1image, car2image, car3image, car4image, ground1image;

function preload(){
 car1image=loadImage ("js/image/car1.png");
 car2image=loadImage ("js/image/car2.png");
 car3image=loadImage ("js/image/car3.png");
 car4image=loadImage ("js/image/car4.png");
 ground1image = loadImage ("js/image/track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
