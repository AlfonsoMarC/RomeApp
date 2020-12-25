// How it works?
 // The frame is opened by an external element of its parent component. But it is closed by an internal button. For that purpose we bind the property isOpen of the frame.component to the property frameIsOpen of the parent component (two-way binding).
 // <mapframe [content]="content" [isOpen]="frameIsOpen" (isOpenChange)="frameIsOpen=$event"></mapframe>

import { Component, OnChanges, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'mapframe',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnChanges {
 
  @Input() content: any;
  @Input() isOpen: boolean;
  @Output() isOpenChange = new EventEmitter<boolean>();

  private title: string;
  private text: string;
  private className: string;

  constructor() {
    this.isOpen=false;
    this.className="shrinked";
  }

  ngOnChanges() {
    if (this.isOpen) {
      this.title = this.content.title;
      this.text = this.content.text;
    }
  }

  closeFrame() {
    this.isOpen=false;
    this.isOpenChange.emit(this.isOpen);
  }

  resizeFrame() {
    if(this.className=="expanded"){
      this.className="shrinked";
    } else {
      this.className="expanded";
    } 
  }

}
