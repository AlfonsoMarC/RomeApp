import { Component, AfterContentChecked, OnInit } from '@angular/core';
import { SharedService } from "../../shared.service";

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements AfterContentChecked{

  public episodeId: string;
  public episodeTitle: string;
  public episodeSrc:string; 


  constructor(private sharedService: SharedService) {
  }
  

  ngAfterContentChecked() {
    this.episodeId=this.sharedService._episodeId;
    this.episodeTitle=this.sharedService._episodeTitle;
    this.episodeSrc=this.sharedService._episodeSrc;
  }

  showTimelinePanel(){
  	document.getElementById("timeline_menu").style.display="block";
  }

}
