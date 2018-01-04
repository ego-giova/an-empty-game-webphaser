"use strict";

var empty = {};

var configuration = {
	width: 800,
	height: 600,
	renderer: Phaser.AUTO
};

empty.game = new Phaser.Game(configuration);

empty.game.state.add("Launcher", empty.launcher);
empty.game.state.start("Launcher");