import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from "../../shared.service";

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit{

  public episodeId: string;
  public episodeTitle: string;
  public episodeSrc:string; 
  public timelineIsHidden: boolean; 


  constructor(private sharedService: SharedService) {
  }

  ngOnInit(){
    this.sharedService.getEpisode().subscribe(episode => {
      if (episode == null){
        this.episodeId="";
        this.episodeTitle="";
        this.episodeSrc="";
      }else{
        this.episodeId=episode.id;
        this.episodeTitle=episode.title;
        this.episodeSrc=episode.src;
      }
    })

    this.sharedService.getTimelineStatus().subscribe(isHidden=>{
      this.timelineIsHidden=isHidden;
    });
    
  }

  showTimelinePanel(){
  	this.sharedService.showTimelinePanel();
  }

}
