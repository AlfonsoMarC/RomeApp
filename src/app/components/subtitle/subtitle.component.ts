/* How it works?
We want the position to alternate between fixed and absolute, depending on the scroll. It is like "sticky" position but in the window, not in the content --> stickSubtitles().

The position of subtitles may be absolute or relative but we always want the same length (80% of the content) --> resizeSubtitle(). 

The initial position is determined by the content of the map and the window. Once the map is loaded, the subtitle must calculate its position. --> @Input() contentLoaded: boolean; 

 */

import { Component, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss']
})

export class SubtitleComponent implements OnChanges{
  public subtitleClass: string;
  public subtitleWidth: string;
  public subtitleMargin: string;
  @Input() contentLoaded: boolean; 
  @Input() text:string;


  ngOnChanges(changes: SimpleChanges){
    this.stickSubtitles(); //Calculate initial position
    this.resizeSubtitles(); //Calculate initial size
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(event: Event) {
    this.stickSubtitles();
  }

  @HostListener('window:resize', ['$event'])
  handleResize(event: Event) {
    this.resizeSubtitles();
    this.stickSubtitles();  // The position can also be changed because the window is resized
  }

  stickSubtitles() {
    var h = window.innerHeight + window.pageYOffset;
    // Fix this access to DOM by communicating with the footer component!!!!! 
    var footerOffset = document.getElementById("footer").offsetTop;
    if (h < footerOffset) {
      this.subtitleClass = "subtitle fixed";
    } else {
      this.subtitleClass = "subtitle absolute";
    }
  }

  resizeSubtitles() {
    // Fix this access to DOM by communicating with the component!!!!! 
    var w = document.getElementById("content").offsetWidth; 
    this.subtitleWidth = String(0.8 * w) + "px";
    this.subtitleMargin = String(0.1 * w) + "px";
  }

}


