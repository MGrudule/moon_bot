"use strict";
const julian = require("julian");
/******* lunation date***** */
function calcLunation(date, format) {
  const synodicMonth = 29.530588861,
    lunationBase = 2423436.40347;
  let lunation = Math.ceil((julian(date) - lunationBase) / synodicMonth);
  return format ? ordinal(lunation) : lunation;
}

function ordinal(num) {
  const int = parseInt(num),
    digits = [int % 10, int % 100],
    ordinals = ["st", "nd", "rd", "th"],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1]) ?
    int + ordinals[digits[0] - 1] :
    int + ordinals[3];
}
exports.calcLunation = calcLunation;
exports.ordinal = ordinal;