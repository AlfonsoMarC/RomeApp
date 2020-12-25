import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from "../../shared.service";
import { Episode } from '../../models/episode';

@Component({
  selector: 'timeline-menu',
  templateUrl: './timeline-menu.component.html',
  styleUrls: ['./timeline-menu.component.css']
})

export class TimelineMenuComponent implements OnInit {

  public episodeList: Array<Episode>;
  public homeEpisode: Episode;
  public _episodes: Array<Episode>;

  constructor(private sharedService: SharedService) {
    
    this.episodeList= [
      new Episode("fpw","First Punic War", "/firstpunicwar/maps","../../../assets/img/fpw-header-icon.png"),
      new Episode("spw","Second Punic War", "/secondpunicwar","../../../assets/img/spw-header-icon.png"),
      new Episode("tpw","Third Punic War", "/thirdpunicwar","../../../assets/img/tpw-header-icon.png"),
      ];
    

    this.sharedService._episodes=this.episodeList; 
  }

  detectSize(){
	   var w = window.innerWidth;
	   if (w<=767) {
      document.getElementById("timeline_menu_container").style.width = "0%";
	    document.getElementById("timeline_menu").className = "timeline_sidepanel";
	    document.getElementById("timeline_closebtn").style.display = "block";
	   } else {
      document.getElementById("timeline_menu_container").style.width = "18%";
	    document.getElementById("timeline_menu").className = "timeline_flex_item";
	    document.getElementById("timeline_closebtn").style.display = "none";
	   }
 	}

  ngOnInit(){
  	this.detectSize();
  }

  hideTimelinePanel(){
    document.getElementById("timeline_menu").style.display="";
  }
}
