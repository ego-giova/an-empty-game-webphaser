"use strict";

var silent = silent || {};

//This is the object constructor
silent.BasePlayer = function(game, physics, x, y, key) {
    Phaser.Sprite.call(this, game, x, y, key);
    //Adds an existing display object to the game world. In this case, the object BasePlayer.
    game.add.existing(this); 
    //Enable physics to the object BasePlayer
    physics.enable(this);
    //Enable collision with the screen bounds
    this.body.collideWorldBounds = true;

    //Jump
    this.body.gravity.y = 1000;
    this.body.maxVelocity.y = 500;
    this.jumpTimer = 0;
};

silent.BasePlayer.prototype = Object.create(Phaser.Sprite.prototype);
silent.BasePlayer.prototype.constructor = silent.BasePlayer;

silent.BasePlayer.prototype.resetMove = function()
{
	this.body.velocity.x = 0;
};

silent.BasePlayer.prototype.move = function(speedx) {
	this.body.velocity.x = speedx;
};

silent.BasePlayer.prototype.jump = function()
{
	this.body.velocity.y = -500;
	this.jumpTimer = this.game.time.now + 750;
};