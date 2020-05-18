/* Copyright (c) 2019 Abhinav Golwalkar. See the file LICENSE for copying permission.
Usage:
```
require("good-time18x19").add(Graphics);
g.setFontGoodTime18x19();
g.drawString("0123456789");
```
*/

var font = atob("A/gB/8B//B8Hx4A84AO8AH8AB+AA/AAfgAP4APcAHPAHj4Pg//gP/gB/A4AAcAAOAAHgAB//+f//D//gAAOA//A//g//wcH4cD8OB+HA/DgfhwPw4H4cD+eB//A7/Ac/AOPAHAAAcAB+AA/AAfgAPwAH4OD8HB+Dg/Bwfg4PwcH4OD8HB+Dg7j45//8f38Hx8f4AP/AH/wAB8AAOAAHAABwAA4AAcAAOAAHAADgf////////8AOAAHAADgf+B//A//gfhwPw4H4cD8OB+HA/DgfhwPw4H4cD8OB+HA/Bw7g/9wP8AB8AfwA/+A//g/z4+4eccHeOD+HA/DgfhwPw4H4cD8OB+HA/Dw/h/+Af+AH+cAAOAAPAAfgAfwAf4A/cA/OB/HB+Dh+Bz+A78Af8AP8AH4AD4AAwAAAAAD4+D+/j//5x8d4+P4OD8HB+Dg/Bwfg4PwcH4OD8HB/Hx7j45//8f38Hx8D+AH/gH/4fw8PwOH4HD8Dh+Bw/A4fgcPwOH8HHuDjnhzx8/wf/wH/wA/gAOBwHA4DgcAAA");
var widths = atob("EggREhISEhISEgQ=");
 

exports.add = function(graphics) {
  graphics.prototype.setFontGoodTime18x19 = function() {
    this.setFontCustom(font, 48, widths, 19);
  }
}
