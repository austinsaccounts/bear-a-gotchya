import './scss/input.scss';
import $ from "jquery";
import { HungryBear } from '../src/js/business-logic.js';

let fuzzy = new HungryBear("Fuzzy");

$(document).ready(function() {
  fuzzy.setHunger()
});
