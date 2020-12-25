import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../shared.service";

@Component({
  selector: 'app-tpw',
  templateUrl: './tpw.component.html',
  styleUrls: ['./tpw.component.css']
})
export class TpwComponent implements OnInit {
  private episodeNumber: number;

  constructor(private sharedService: SharedService) {
    this.episodeNumber=3;
  }

  ngOnInit(){
    this.sharedService.updateEpisode(this.episodeNumber);
  }

  ngOnDestroy(){
    this.sharedService.updateEpisode(0);
  }

}
