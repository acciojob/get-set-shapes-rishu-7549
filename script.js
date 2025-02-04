//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	get width(){
		return this.width;
	}
	get height(){
		return this.height;
	}
	getArea(){
		return width*height;
	}
}

class Square extends Rectangle {
	constructor(side){
		this.side = side;
	}
	super();
	getPerimeter(){
		return 4*side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
