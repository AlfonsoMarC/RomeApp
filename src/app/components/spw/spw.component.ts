import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../shared.service";

@Component({
  selector: 'app-spw',
  templateUrl: './spw.component.html',
  styleUrls: ['./spw.component.css']
})
export class SpwComponent implements OnInit {
  private episodeNumber:number;

  constructor(private sharedService: SharedService) { 
    this.episodeNumber=2;
  }

  ngOnInit(){
    this.sharedService.updateEpisode(this.episodeNumber);

  }

  ngOnDestroy(){
    this.sharedService.updateEpisode(0);
  }
}
