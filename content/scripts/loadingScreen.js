"use strict";

var silent = silent || {};

silent.LoadingScreen = function(game){};

silent.LoadingScreen.prototype.preload = function() 
{
	/*         adding previously loaded sprite to the screen.            */
	//Our Logo.
	this.logo = this.add.sprite(this.game.width * 0.5, this.game.height * 0.5, "Logo");

	//Take the first loading bars spritesheet image. Our loading bar.
	this.emptyBar = this.add.sprite(this.game.width * 0.5, (this.game.height * 0.5) + 256, "LoadingBars");
	//Take the second loading bars spritesheet image.
	this.fullBar = this.add.sprite(this.emptyBar.x, this.emptyBar.y, "LoadingBars", 1);
	//Putting a text to say the loading percentage
	this.percentage = this.add.text(this.emptyBar.x, this.emptyBar.y, "0%");
	//Set the anchor on the image center
	this.logo.anchor.setTo(0.5); //It is just like doing : this.logo.anchor.x = this.logo.anchor.y = 0.5
	this.emptyBar.anchor.setTo(0.5);
	this.fullBar.anchor.setTo(0.5);
	this.percentage.anchor.setTo(0.5);


	/* ALL WE NEED TO LOAD */

	/*END ALL WE NEED TO LOAD*/



	//You can set a Sprite to be a "preload" sprite by passing it to this method.
	//setPreloadSprite(sprite, direction"optional argument")
	this.load.setPreloadSprite(this.fullBar);

};

silent.LoadingScreen.prototype.loadUpdate = function()
{
	this.percentage.text = this.load.progress + "%";
};

silent.LoadingScreen.prototype.create = function()
{
	this.state.start("Playground");
};