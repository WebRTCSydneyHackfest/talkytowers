var crel = require('crel');
var tower = module.exports = crel('article', { class: 'tower' });
var floors = tower.floors = [];
var FLOOR_COUNT = 5;

// initilaise the tower width and level height
tower.width = 768;
tower.levelHeight = 200;

// create the floors
for (var ii = FLOOR_COUNT; ii--; ) {
  var container = crel('article', { class: 'level' }, crel('h2', 'Level ' + (ii + 1)));
  var canvas = crel('canvas', {
    width: tower.width,
    height: tower.levelHeight
  });
  
  floors.push(canvas.getContext('2d'));
  
  container.appendChild(canvas);
  tower.appendChild(container);
}

tower.init = function() {
  document.body.appendChild(tower);
};
