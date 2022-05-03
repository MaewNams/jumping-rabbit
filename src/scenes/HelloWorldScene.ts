import Phaser from "phaser";

class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super("hello-world");
  }

  preload() {
    this.load.image("sky", "assets/sky.png");
  }

  create() {
    const { width, height } = this.scale;

    this.add.image(width * 0.5, height * 0.5, "sky");
  }

  update() {}
}

export default HelloWorldScene;
