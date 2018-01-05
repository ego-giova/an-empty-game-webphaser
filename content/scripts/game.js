"use strict";

var empty = empty || {};

var configuration = {
	width: 800,
	height: 600,
	renderer: Phaser.AUTO
};

empty.game = new Phaser.Game(configuration);

empty.game.state.add("Launcher", empty.launcher);
empty.game.state.add("LoadingScreen", empty.loadingScreen);
empty.game.state.add("Gameplay", empty.gameplay);

empty.game.state.start("Launcher");