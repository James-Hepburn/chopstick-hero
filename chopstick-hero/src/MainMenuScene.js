import Phaser from 'phaser';

export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenuScene');
  }

  preload() {
    this.load.image('startButtonNormal', 'normal-start-button.png');
    this.load.image('startButtonHover', 'hover-start-button.png');
    this.load.image('startButtonPressed', 'pressed-start-button.png');
  }

  create() {
    const { width, height } = this.scale;

    this.add.text(width / 2, height / 2 - 150, '🥢 Chopstick Hero 🥢', {
      fontSize: '64px',
      fontFamily: 'sans-serif',
      color: '#ffffff'
    }).setOrigin(0.5);

    const startButton = this.add.image(width / 2, height / 2 + 50, 'startButtonNormal')
      .setOrigin(0.5)
      .setScale(2)
      .setInteractive({ useHandCursor: true });

    startButton.on('pointerover', () => {
      startButton.setTexture('startButtonHover');
    });

    startButton.on('pointerout', () => {
      startButton.setTexture('startButtonNormal');
    });

    startButton.on('pointerdown', () => {
      startButton.setTexture('startButtonPressed');
    });

    startButton.on('pointerup', () => {
      startButton.setTexture('startButtonHover');
      this.scene.start('GameScene');
    });
  }
}