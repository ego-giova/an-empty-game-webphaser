"use strict";

var silent = silent || {};

silent.Playground = function(game){};

silent.Playground.prototype.preload = function() 
{
	this.stage.backgroundColor = "#242424";

	/*setting up some things*/
	this.physics.startSystem(Phaser.Physics.ARCADE);
	this.physics.arcade.gravity.y = 300;

	this.cursors = this.input.keyboard.createCursorKeys();
	//this.jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	/*end setting up some things*/

	//Create a player using the class BasePlayer
	this.player = new silent.BasePlayer(this.game, this.physics, 100, 100, 'square');

};

silent.Playground.prototype.update = function()
{
	this.player.resetMove();
	if(this.cursors.left.isDown)
	{
		this.player.move(-200);
	}
	else if(this.cursors.right.isDown)
	{
		this.player.move(200);
	}
	/*else if(this.jumpButton.isDown && this.player.body.onFloor() && this.game.time.now > this.player.jumpTimer)
	{
		this.player.jump();
	}*/
};