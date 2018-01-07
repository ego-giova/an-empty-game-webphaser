"use strict";

var silent = silent || {};

silent.Playground = function(game){};

silent.Playground.prototype.preload = function() 
{
	this.stage.backgroundColor = "#242424";

	this.rect = this.game.add.graphics(100, 100);
	this.rect.beginFill(0xff0000);

	this.rect.drawRect(50, 250, 50, 50); //drawRect(x, y, width, height) 
};

silent.Playground.prototype.update = function()
{
	
};