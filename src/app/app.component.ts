import { Component} from '@angular/core';
import { Episode } from './models/episode';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'RomeApp';
  public w: number; 
  public shrinkedVersion: boolean; 

  constructor() { 
    this.w = window.innerWidth;
    this.shrinkedVersion=null;
  }

  ngOnInit(){
    this.onResize();
  }

  onResize(){
    this.w = window.innerWidth; 
    this.shrinkedVersion = this.w>768 ? false : true;  
  }
 
}

