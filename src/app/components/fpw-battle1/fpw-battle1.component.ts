import { Component, OnInit, ElementRef } from '@angular/core';
import { Ship } from '../../models/ship';
import { AnimationBuilder, NoopAnimationPlayer, AnimationPlayer, stagger, trigger, transition, style, state, query, group, animate, keyframes } from '@angular/animations';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { bindCallback } from 'rxjs';



@Component({
  selector: 'app-fpw-battle1',
  templateUrl: './fpw-battle1.component.html',
  styleUrls: ['./fpw-battle1.component.css'],
 /*
      transition('* => stage2', [
        animate('15s ease-in-out')*/
  
})
export class FpwBattle1Component implements OnInit {

  public stage: string;
  public stageCounter: number;
  public animationIsRunning: boolean;

  
  /* Roman squadrons I to IV*/
  public squadronR1: Ship[] =  this.buildSquadron({id:"squadronR1", x0: 60, y0: 50.5, xn: 67, yn: 65, size: 10 });
  public squadronR2: Ship[] = this.buildSquadron({id:"squadronR2", x0: 60, y0: 49.5, xn: 67, yn: 35, size: 10 });
  public squadronR3: Ship[] = this.buildSquadron({id:"squadronR3", x0: 70, y0: 40, xn: 70, yn: 60, size: 10 });
  public squadronR4: Ship[] = this.buildSquadron({id:"squadronR4", x0: 75, y0: 35, xn: 75, yn: 65, size: 10 });

  
  /* Carthaginian squadrons I to IV*/
  public squadronC1: Ship[] =  this.buildSquadron({id:"squadronC1", x0: 25, y0: 71, xn:30, yn: 85, size: 10 });
  public squadronC2: Ship[] = this.buildSquadron({id:"squadronC2", x0: 25, y0: 51, xn: 25, yn: 70, size: 10 });
  public squadronC3: Ship[] = this.buildSquadron({id:"squadronC3", x0: 25, y0: 49, xn: 25, yn: 30, size: 10 });
  public squadronC4: Ship[] = this.buildSquadron({id:"squadronC4", x0: 25, y0: 29, xn: 30, yn: 15, size: 10 });

  public player: AnimationPlayer = new NoopAnimationPlayer();

  constructor(private _builder: AnimationBuilder, private _element: ElementRef) {
    this.stageCounter = 0;   
  }

  ngOnInit() {
    this.animationIsRunning = false;
  }

  
  private buildSquadron(params) {
    
    var xSpace = (params.xn - params.x0) / (params.size - 1);
    var ySpace = (params.yn - params.y0) / (params.size - 1);
    var squadron = [];
    for (let i = 0; i < params.size; i++) {
     let x = params.x0 + i * xSpace;
     let y = params.y0 + i * ySpace;
      let newShip = {
        id: params.id,
        alive: true,
        x: x,
        y: y,
        orientation: 0,
        x_initial: x + '%',
        y_initial: y + '%',
        orientation_s: 'rotate(0deg)'
      };
      squadron.push(newShip);
    }
    return squadron;
  }


  private _moveShipAnimation( shipQuery: string, position: string[], orientation:number, time:number, delay:number, stagger: number){
    var total_delay=delay+stagger; 
    
    
      var rotation = 'rotate('+orientation+'deg)';
      return this._builder.build([
        query(shipQuery, [ group([
          animate( time/4+'s', style({transform: rotation})),
          animate(time+'s '+total_delay+'s ease-in', style({left: position[0], bottom: position[1]}))
        ])
        ])
      ])
  }

  // Move Ship Animation Player 
  private _moveShipPlayer(shipQuery:string, position:string[], orientation:number, time:number, delay:number, stagger:number) {
    const animation = this._moveShipAnimation(shipQuery, position, orientation, time, delay, stagger);
    return animation.create(this._element.nativeElement);
  }


  private _moveSquadron(squadron, position, time, delay, stagger, callback=void(0)) {
    var size = squadron.length;
    var squadronId=squadron[0].id;

    // Old position
    var old_squadron=squadron; 

    // New position
    var x0=position.x0;
    var y0=position.y0;
    var xn=position.xn;
    var yn=position.yn;
    var xSpace = (xn -x0) / (size - 1);
    var ySpace = (yn - y0) / (size - 1);
    
    for (let i = 0; i < size; i++) {
      var x = x0 + i * xSpace;
      var y = y0 + i * ySpace;
     
       if (x-old_squadron[i].x>0){
        var orientation = Math.atan((y-old_squadron[i].y)/(x-old_squadron[i].x))*180/3.14*(-1);
      } else if(x-old_squadron[i].x<0) { 
        var orientation = Math.atan((y-old_squadron[i].y)/(x-old_squadron[i].x))*180/3.14;
      } else {
        var orientation=3.14/2;
      }
      squadron[i].x=x;
      squadron[i].y=y;
      squadron[i].orientation=orientation; 
      let iQuery=i+1;
      let shipQuery='#'+squadronId+'> .ship:nth-child('+iQuery+')';
      let position=[x+'%', y+'%'];
      let stagger_i=stagger*i; 
      var player=this._moveShipPlayer(shipQuery, position, orientation, time, delay, stagger_i);
      player.play();
      if (i==size-1 && typeof callback == "function"){
         player.onDone(()=>{
            callback(); 
        });
      }
    }
  }

  private _turnSquadronAnimation( shipQuery: string, time:number, rotation:string){ 
      return this._builder.build([
        query('.ship', [ group([
          animate( time +'s', style({transformOrigin: '100% 100%' , transform: 'rotate(180deg)'})),
        ])
        ])
      ])
  }

  private _turnSquadronPlayer(shipQuery:string, time:number, rotation:string) {
    const animation = this._turnSquadronAnimation(shipQuery, time, rotation);
    return animation.create(this._element.nativeElement);
  }
  
  

  forward() {

   if (!this.animationIsRunning) {
      this.stageCounter++;
      this.stage = "stage" + this.stageCounter;
      switch (this.stageCounter) {
        case 1: {
          //this._turnSquadronPlayer("", 5, "").play();
          this._moveSquadron(this.squadronR1, { x0: 30, y0: 50.5, xn: 40, yn:65},20,0,0);
          this._moveSquadron(this.squadronR2, { x0: 30, y0: 49.5, xn: 40, yn:35},20,0,0);
          this._moveSquadron(this.squadronR3, { x0: 60, y0: 40, xn: 60, yn: 60},18,2,0);
          this._moveSquadron(this.squadronR4, { x0: 65, y0: 35, xn: 65, yn: 65},18,2,0);
          this._moveSquadron(this.squadronC2, { x0: 18, y0: 51, xn: 25, yn: 70},12,4,0.2);
          this._moveSquadron(this.squadronC3, { x0: 18, y0: 49, xn: 25, yn: 30},12,4,0.1);

          break
        }

        case 2: {
          this._moveSquadron(this.squadronR1, { x0: 25, y0: 50.5, xn: 27, yn:65},5,0,0.1);
          this._moveSquadron(this.squadronR2, { x0: 25, y0: 49.5, xn: 27, yn:35},5,0,0.1);
          this._moveSquadron(this.squadronR3, { x0: 50, y0: 40, xn: 50, yn: 60},5,0,0);
          this._moveSquadron(this.squadronR4, { x0: 55, y0: 35, xn: 55, yn: 65},5,0,0);
          this._moveSquadron(this.squadronC2, { x0: 24, y0: 50.5, xn: 26, yn:67},5,0,0.2);
          this._moveSquadron(this.squadronC3, { x0: 24, y0: 49.5, xn: 26, yn:33},5,0,0.1);
          this._moveSquadron(this.squadronC4, { x0: 35, y0: 25, xn: 35, yn: 10},2,0,0, ()=>{
            this._moveSquadron(this.squadronC4, { x0: 50, y0: 25, xn: 50, yn: 10},2,0, 0, ()=>{
              this._moveSquadron(this.squadronC4, { x0: 55, y0: 30, xn: 60, yn: 20},2,0, 0)
            })
          });
          break
        }

        case 3: {
          this._moveSquadron(this.squadronR3, { x0: 50, y0: 40, xn: 50, yn: 60},5,0, 0);
          this._moveSquadron(this.squadronR4, { x0: 55, y0: 37, xn: 65, yn: 55},5,0, 0.1);
          this._moveSquadron(this.squadronC4, { x0: 56, y0: 34, xn: 70, yn: 33},5,0, 0.1);
          break
        }

        case 4: {
          this._moveSquadron(this.squadronR4, { x0: 56, y0: 35, xn: 68, yn: 39},5,0, 0.1);
          this._moveSquadron(this.squadronC4, { x0: 56, y0: 34, xn: 69, yn: 38},5,0, 0.1);
          break
        }

      }
    }
  
  }

}



/*

  started(e) {
    this.animationIsRunning = true;
  }

  finished(e) {
    this.animationIsRunning = false;
  }*/