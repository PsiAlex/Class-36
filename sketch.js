var gameState = 0
var playercount;
var database;
var form,player,game

function setup(){
    database = firebase.database();
    createCanvas(500,500);
}

function draw(){
    background("white");
}