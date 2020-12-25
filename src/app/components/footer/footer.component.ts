import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { SharedService } from "../../shared.service";

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterContentChecked {
  public episodeId: string;

  constructor(private sharedService: SharedService) { }

  ngAfterContentChecked() {
    this.episodeId = this.sharedService._episodeId;
  }

}
