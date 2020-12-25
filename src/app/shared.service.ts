import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Episode } from './models/episode';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  _episodes: Array<Episode>;
  _episodeNumber: number;
  _episodeNumberBS = new BehaviorSubject<number>(null);
  _episodeId: string;
  _episodeTitle: string;
  _episodeSrc: string;


  constructor() {
    this._episodeNumber;
    this._episodeId;
    this._episodeTitle;
    this._episodeSrc;
    this._episodeNumberBS.next(this._episodeNumber);

  }

  updateEpisode(val) {
    this._episodeNumber = val;
    this._episodeNumberBS.next(this._episodeNumber);
    if (this._episodeNumber == 0 || this._episodeNumber == undefined) {
      this._episodeId = null;
      this._episodeTitle = null;
      this._episodeSrc = null;
    } else {
      this._episodeId = this._episodes[this._episodeNumber-1].id;
      this._episodeTitle = this._episodes[this._episodeNumber-1].title;
      this._episodeSrc = this._episodes[this._episodeNumber-1].src;
    }
  }
}
