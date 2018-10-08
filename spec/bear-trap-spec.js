import { HungryBear } from '../src/js/business-logic.js';

describe('HungryBear', function() {
  let fuzzy = new HungryBear("fuzzy");

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.setHunger();
    fuzzy.foodLevel = 10;
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });


  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    fuzzy.feed();

    expect(fuzzy.foodLevel).toEqual(10);

  });
  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should stop foodLevel at 0', function() {
    jasmine.clock().tick(12000);
    alert(fuzzy.foodLevel);
    expect(fuzzy.foodLevel).toEqual(0);
  });


});
