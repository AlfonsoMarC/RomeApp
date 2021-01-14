import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SharedService } from "../../shared.service";

@Component({
  selector: 'app-fpw',
  templateUrl: './fpw.component.html',
  styleUrls: ['./fpw.component.scss']
})
export class FpwComponent implements OnInit {
  
  private episodeNumber: number;
  public fpmMaps: Array<object>; //String []
  

  constructor(private sharedService: SharedService) {
    this.episodeNumber = 1;
    this.fpmMaps=[ 
      {title:"Mediterranean 264 B.C.", route:"maps"},
      {title:"Sicily 264 B.C.", route:"maps/map2"},
      {title:"Sicily 251 B.C.", route:"maps/map3"},
    ];
  }
  ngOnInit() {
   this.sharedService.updateEpisode(this.episodeNumber);
  }

  ngOnDestroy(){
    this.sharedService.updateEpisode(null);
   }

}
