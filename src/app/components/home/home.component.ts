import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements AfterViewInit {
  public expansionMap: string;
  public maps: string[];
  public numberOfMaps: number;
  public mapNumber: number;

  private componentMounted: boolean;
  private barWidth: number;
  private dragItemWidth: number;
  private dragging: boolean;
  private barX: number;
  private x: number; // position in pixels relative to the bar (captured in an event) 
  private dragItemX: number; // position in percentaje relative to the bar (to render the dragItem)
  //private clickX: number; // click x coordinate relative to the bar in pixels


  constructor() {
    this.maps = [
      "../../../assets/img-home/empire510bc.png",
      "../../../assets/img-home/empire338bc.png",
      "../../../assets/img-home/empire290bc.png",
      "../../../assets/img-home/empire272bc.png",
      "../../../assets/img-home/empire264bc.png",
      "../../../assets/img-home/empire218bc.png",
      "../../../assets/img-home/empire210bc.png"
    ];
    this.mapNumber = 0;
    this.numberOfMaps = this.maps.length;
    this.expansionMap = this.maps[0];
  }

  // (1) Calculate variables after view init and after resizing 

  @ViewChild('bar') bar: ElementRef;
  @ViewChild('dragItem') dragItem: ElementRef;

  ngAfterViewInit() {
    this.componentMounted = true;
    this.barX = this.bar.nativeElement.getBoundingClientRect().x;
    this.barWidth = this.bar.nativeElement.offsetWidth;
    this.dragItemWidth = this.dragItem.nativeElement.offsetWidth
  }

  ngOnDestroy() {
    this.componentMounted = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.handleResize();
  }

  handleResize() {
    //This function will be invoked in window.addEventListener
    if (this.componentMounted) {
      this.barX = this.bar.nativeElement.getBoundingClientRect().x;
      this.barWidth = this.bar.nativeElement.offsetWidth;
      this.dragItemWidth = this.dragItem.nativeElement.offsetWidth;
    }
  }

  // (2) Update the map by clicking in the bar or dragging the item

  dragItemMouseDown(e) {
    e.preventDefault();
    this.dragging = true;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    e.preventDefault();
    if (this.dragging) {
      this.x = (e.clientX - this.barX);
      this.moveItem(this.x);
    }
  }


  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e) {
    e.preventDefault();
    if (this.dragging == true) {
      this.dragging = false;
    }
  }

  barMouseDown(e) {
    if (!this.dragging) { // Do not apply when dragging the item
      this.x = (e.clientX - this.barX);
      this.moveItem(this.x);
    }
  }

  moveItem(x) {
    if (this.x < 0) {
      this.dragItemX = 0;
      this.mapNumber = 0;

    } else if (this.x >= this.barWidth - this.dragItemWidth) {
      this.dragItemX = (this.barWidth - this.dragItemWidth) / this.barWidth * 100;
      this.mapNumber = this.numberOfMaps - 1;

    } else {
      this.dragItemX = this.x / this.barWidth * 100;
      this.mapNumber = Math.trunc((this.dragItemX * this.numberOfMaps) / 100);
    }
    document.getElementById("drag_item").style.left = this.dragItemX + "%";
    this.expansionMap = this.maps[this.mapNumber];
  }

  // (3) Update the map by clicking in the arrow 

  nextMapArrow(e) {
    e.preventDefault();
    if (this.mapNumber < this.numberOfMaps - 1) {
      this.mapNumber++;
      this.expansionMap = this.maps[this.mapNumber];
      this.dragItemX = 100 / this.numberOfMaps * (this.mapNumber + 0.5) - this.dragItemWidth / (2 * this.barWidth) * 100;
    } else if (this.mapNumber == this.numberOfMaps - 1) {
      this.dragItemX = (this.barWidth - this.dragItemWidth) / this.barWidth * 100;
    }
    document.getElementById("drag_item").style.left = this.dragItemX + "%";
  }

  previousMapArrow(e) {
    e.preventDefault();
    if (this.mapNumber > 0) {
      this.mapNumber--;
      this.expansionMap = this.maps[this.mapNumber];
      this.dragItemX = 100 / this.numberOfMaps * (this.mapNumber + 0.5) - this.dragItemWidth / (2 * this.barWidth) * 100;
    } else if (this.mapNumber == 0) {
      this.dragItemX = 0;
    }
    document.getElementById("drag_item").style.left = this.dragItemX + "%";
  }

}



