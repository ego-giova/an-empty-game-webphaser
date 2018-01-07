//With strict mode, you can not, for example, use undeclared variables.
"use strict";

//This is a namespace. It is a global object.
var silent = silent || {};

//Initial configuration to initialize phaser.
var configuration = {
	width: 800,
	height: 600,
	renderer: Phaser.AUTO
};

//Start phaser
silent.game = new Phaser.Game(configuration);

//State.add: A reference to the GameObjectFactory which can be used to add new objects to the World.
silent.game.state.add("Launcher", silent.Launcher);
silent.game.state.add("LoadingScreen", silent.LoadingScreen);
silent.game.state.add("Playground", silent.Playground);


silent.game.state.start("Launcher");