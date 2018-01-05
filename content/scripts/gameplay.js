"use strict";

var empty = empty || {};

empty.gameplay = function(game){};

empty.gameplay.prototype = 
{
	preload : function()
	{
		this.stage.backgroundColor = "#242424";
		
		this.textTemplate = {
			font: "bold 32px AutourOneRegular",
			fill: "red",
			align: "center",
			stroke: "blue",
			strokeThickness: 4
		}

		this.header = this.add.text(32, 32, "Tekst", this.textTemplate);

		this.gradient = this.header.context.createLinearGradient(0, 0, this.header.width, 0);
		this.gradient.addColorStop(0, "red");
		this.gradient.addColorStop(1, "green");

		this.header.fill = this.gradient;

		//this.header = this.add.text(32, 32, "Tekst", {font: "bold 32px Autour One Regular", fill: "yellow", align: "center", stroke: "blue", strokeThickness: 4});
	}
};