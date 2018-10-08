import './scss/input.scss';
import $ from "jquery";
import { HungryBear } from '../src/js/business-logic.js';

let fuzzy = new HungryBear("fuzzy");

$(document).ready(function() {

  // $('#start').click(function(){
    // $('#start').addClass('hidden');
    fuzzy.setHunger();
  // });
});
