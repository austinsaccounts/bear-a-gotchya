export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    let hunger = setInterval(() => {
      this.foodLevel--;
      console.log(this.foodLevel);
      if (this.foodLevel == 0) {
        clearInterval(hunger);
        console.log("Done!");
      } else {
        console.log("goin");
      }
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel++;
  }
}
