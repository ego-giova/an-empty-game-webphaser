"use strict";

var empty = empty || {};

empty.loadingScreen = function(game){};

empty.loadingScreen.prototype = 
{
	preload : function()
	{
		
		this.logo = this.add.sprite(this.game.width * 0.5, this.game.height * 0.5, "Logo");
		this.emptyBar = this.add.sprite(this.game.width * 0.5, (this.game.height * 0.5) + 256, "LoadingBars");
		this.fullBar = this.add.sprite(this.emptyBar.x, this.emptyBar.y, "LoadingBars", 1);
		this.percentage = this.add.text(this.emptyBar.x, this.emptyBar.y, "0%");

		this.logo.anchor.setTo(0.5); // = this.logo.anchor.x = this.logo.anchor.y = 0.5
		this.emptyBar.anchor.setTo(0.5);
		this.fullBar.anchor.setTo(0.5);
		this.percentage.anchor.setTo(0.5);

		this.load.setPreloadSprite(this.fullBar);
	},

	create : function()
	{
		this.state.start("Gameplay");
	},

	loadUpdate: function()
	{
		this.percentage.text = this.load.progress + "%";
	}
}