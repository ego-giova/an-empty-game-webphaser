"use strict";

var empty = empty || {};

empty.launcher = function(game){};

empty.launcher.prototype = 
{
	init : function()
	{
		this.game.input.maxPointers = 1;
		this.game.stage.disableVisibilityChange = true;
		this.game.renderer.renderSession.roundPixels = true;
		this.game.stage.backgroundColor = "#c86464";
	},

	preload : function()
	{
		this.load.image("Logo", "content/sprites/phaser.png");
		this.load.spritesheet("LoadingBars", "content/sprites/loadingBars.png", 256, 64)
	},

	create : function()
	{
		this.state.start("LoadingScreen");
	}
};