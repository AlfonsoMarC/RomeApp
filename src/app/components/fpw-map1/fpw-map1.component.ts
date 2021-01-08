import { Component, OnInit } from '@angular/core';
import frames from './fpw-map1-frames';
import {FrameService} from '../../services/frame.service';

@Component({
  selector: 'fpw-map1',
  templateUrl: './fpw-map1.component.html',
  styleUrls: ['./fpw-map1.component.css'],
  providers: [FrameService]
})
export class FpwMap1Component implements OnInit {
  public mapImages: any;
  public image: string;
  public imageIsLoaded: boolean; 
  public frames: Array<object>;
  public frameIsOpen: boolean;
  public frameContent: object;
  public subtitleText:string;
  
  constructor(
    private _frameService: FrameService
  ) {
    this.mapImages = [
      "../../../assets/img-fpw/fpw1_ro.png",
      "../../../assets/img-fpw/fpw1_sy.png",
      "../../../assets/img-fpw/fpw1_ca.png",
      "../../../assets/img-fpw/fpw1_me.png",
      "../../../assets/img-fpw/fpw1.png"
    ]
    this.frameIsOpen = false;
    this.subtitleText=" The First Punic War (264 to 241 BC) was the first of three wars fought between Carthage and Rome, the two main powers of the western Mediterranean in the early 3rd century BC."
  }

  ngOnInit() {
    this.image = this.mapImages[4];
  }

  hoverMap(number) {
    this.image = this.mapImages[number];
  }

  openFrame(e, frameNumber) {
    e.preventDefault();
    this.frameContent = frames[frameNumber];
    this.frameIsOpen=true;
  }

  imageLoaded(){
    this.imageIsLoaded=true;
  }

}
