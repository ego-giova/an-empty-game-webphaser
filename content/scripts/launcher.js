"use strict";

var silent = silent || {};


//Defining a new Class called "Launcher" and a default constructor.
silent.Launcher = function(game){};

/*        Defining Launcher Class methods        */
silent.Launcher.prototype.init = function() 
{
	//init method
	this.game.input.maxPointers = 1;
	this.game.stage.disableVisibilityChange = true;
	this.game.renderer.renderSession.roundPixels = true;
	this.game.stage.backgroundColor = "#c86464";
};
//preload method
silent.Launcher.prototype.preload = function() 
{
	//All we need to Load before start
	this.load.image("Logo", "content/sprites/logo.png");
	this.load.spritesheet("LoadingBars", "content/sprites/loadingBars.png", 256, 64);
};
//create method
silent.Launcher.prototype.create = function() 
{
	this.state.start("LoadingScreen");
};

