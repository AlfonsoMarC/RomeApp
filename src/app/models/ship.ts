export class Ship {
	constructor (
		public id: string, // Squadron id
		
		// Ship coordinates 
		public x: number,  // absolute coordinate x 
		public y: number,  // absolute coordinate y
		public x_initial: string,  
		public y_initial: string,

		// Ship orientation
		public orientation: number,
		public orientation_s: string, 

		// Ship is alive or dead
		public alive: boolean, 
		){}
}