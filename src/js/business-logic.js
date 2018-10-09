import $ from 'jquery';

export class HungryBear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.tiredLevel = 15;
  }

  setHunger() {
    const hunger = setInterval(() => {
      this.foodLevel--;
      console.log("food level: "+this.foodLevel);
      if ( this.tiredLevel <= 0) {
        setTimeout(() => {
          console.log(this);
          this.setHunger();
        }, 5000);
        clearInterval(hunger);
      }
      if (this.foodLevel == 0) {
        clearInterval(hunger);
        $('h1').toggleClass('hidden');
      }
    }, 1000);
  }

  setTired() {
    const tired = setInterval(() => {
      this.tiredLevel--;
      console.log("tired level: "+this.tiredLevel);
      if (this.tiredLevel == 0) {
        setTimeout(() => {
          // console.log(this);
          this.tiredLevel = 15;
          this.setTired();
        }, 5000);
        clearInterval(tired);
      } else {
          // console.log(this.foodLevel + ' , ' + this.tiredLevel);
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

  feed(food) {
    this.foodLevel += food;
  }
}
