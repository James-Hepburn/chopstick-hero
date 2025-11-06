import Phaser from 'phaser';

export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenuScene');
  }

  preload() {
    
  }

  create() {
    const { width, height } = this.scale;

    this.add.text(width / 2, height / 2 - 100, '🥢 Chopstick Hero 🥢', {
      fontSize: '64px',
      fontFamily: 'sans-serif',
      color: '#fff'
    }).setOrigin(0.5);

    const startText = this.add.text(width / 2, height / 2 + 50, 'Click to Start', {
      fontSize: '32px',
      color: '#ffcc00'
    }).setOrigin(0.5).setInteractive();

    startText.on('pointerover', () => startText.setStyle({ color: '#ffff66' }));
    startText.on('pointerout', () => startText.setStyle({ color: '#ffcc00' }));
    startText.on('pointerdown', () => this.scene.start('GameScene'));
  }
}