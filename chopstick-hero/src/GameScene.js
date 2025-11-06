import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {

  }

  create() {
    const { width, height } = this.scale;

    this.add.text(width / 2, height / 2, 'Game Scene Loaded!', {
      fontSize: '40px',
      color: '#fff'
    }).setOrigin(0.5);

    this.input.keyboard.on('keydown-ESC', () => {
      this.scene.start('MainMenuScene');
    });
  }
}