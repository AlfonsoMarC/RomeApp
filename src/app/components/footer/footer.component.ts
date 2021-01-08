import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../shared.service";

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public episodeId: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit(){
    this.sharedService.getEpisode().subscribe(episode => {
      if (episode == null){
        this.episodeId="";
      }else{
        this.episodeId=episode.id;
      }
    })
  }

}
