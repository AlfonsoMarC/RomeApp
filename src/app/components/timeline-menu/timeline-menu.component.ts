import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from "../../shared.service";
import { Episode } from '../../models/episode';


@Component({
  selector: 'timeline-menu',
  templateUrl: './timeline-menu.component.html',
  styleUrls: ['./timeline-menu.component.scss']
})

export class TimelineMenuComponent implements OnInit {

  public episodeList: Array<Episode>;
  public _episodes: Array<Episode>;
  public timelineIsHidden: boolean; 
  @Input() timelineIsToggleable: boolean; 

  constructor(private sharedService: SharedService) {
    
    this.episodeList= [
      new Episode("fpw","First Punic War", "/firstpunicwar/maps","../../../assets/img/fpw-header-icon.png"),
      new Episode("spw","Second Punic War", "/secondpunicwar","../../../assets/img/spw-header-icon.png"),
      new Episode("tpw","Third Punic War", "/thirdpunicwar","../../../assets/img/spw-header-icon.png"),
      ];

    this.sharedService._episodes=this.episodeList;  
  }

  ngOnInit(){
    this.sharedService.getTimelineStatus().subscribe(isHidden=>{
      this.timelineIsHidden=isHidden;
    });
  }

  hideTimelinePanel(){
   this.sharedService.hideTimelinePanel();
  }

}
