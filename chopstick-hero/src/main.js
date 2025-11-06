import Phaser from 'phaser';
import MainMenuScene from './MainMenuScene.js';
import GameScene from './GameScene.js';

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: '#000000',
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [MainMenuScene, GameScene]
};

new Phaser.Game(config);