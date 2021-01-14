import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'map-selector',
  templateUrl: './map-selector.component.html',
  styleUrls: ['./map-selector.component.scss']
})
// How it works?
// We receive the maps as an Input from its parent component and navigate between them with the router navigate relative to its parent route

export class MapSelectorComponent implements OnInit {
  @Input() maps: any;
  public mapTitle: string;
  public mapRoute: string;
  public mapNumber: number;
  public numberOfMaps:number;

  constructor( 
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.mapNumber=0;
    this.numberOfMaps=this.maps.length;
    this.mapTitle=this.maps[0].title; 
    this.mapRoute=this.maps[0].route;
  }

  previousMap(e) {
    e.preventDefault();
    this.mapNumber >= 1 && this.mapNumber--;
    this.mapTitle=this.maps[this.mapNumber].title; 
    this.mapRoute=this.maps[this.mapNumber].route;
    // Router Navigate to the previous map relative to the current map
    this.router.navigate([this.mapRoute], { relativeTo: this.route }); 
  }

  nextMap(e) {
    e.preventDefault();
    this.mapNumber < (this.numberOfMaps - 1) && this.mapNumber++;
    this.mapTitle=this.maps[this.mapNumber].title; 
    this.mapRoute=this.maps[this.mapNumber].route; 
    // Router Navigate to the next map relative to the current map
    this.router.navigate([this.mapRoute], { relativeTo: this.route }); 
  } 
}
