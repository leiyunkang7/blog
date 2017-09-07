(function(win,undefined){
	
	class Cell{
		constructor( x , y ){
			this.x=x;
			this.y=y;
		}
		toString(){
			console.log( this.x + this.y );
			return this.x + this.y;
		}
	}

	win.Cell = Cell;
})(window);