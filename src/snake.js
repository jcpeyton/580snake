// Snake.js

/** @class Snake
  * The snake in a Snake game
  */
export default class Snake {
	constructor(x, y, segments) {
		this.body = [];
		for var(i = 0; i < segments; i++) {
			this.body.push({
				x: x - i;
				y: y
			});
		}
		this.direction = 'right';
	}
	checkForConsumption(food) {
		
	}
	update() {
		//did we hit a wall
		//did we eat ourselves
		//did we eat food
		//do we need to grow
	}
	render (ctx) {
		this.body.forEach(function(segment) {
			ctx.save();
			ctx.fillStyle = 'green';
			ctx.fillRect(segment.x, segment.y, 1, 1);
			ctx.restore();
		});
	}
}