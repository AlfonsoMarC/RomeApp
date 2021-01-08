import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Episode } from './models/episode';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  _episodes: Array<Episode>;
  _currentEpisode = new BehaviorSubject<Episode>(null);
  _timelineIsHidden = new BehaviorSubject<boolean>(null);

  constructor() {
  }

  updateEpisode(episodeNumber: number) {
    if (episodeNumber==0 || episodeNumber==null) {
      this._currentEpisode.next(null);
    }else {
      this._currentEpisode.next(this._episodes[episodeNumber-1]);
    }
  }

  getEpisode(): Observable<Episode> {
    return this._currentEpisode.asObservable();
  }

  showTimelinePanel(){
    this._timelineIsHidden.next(false);
  }

  hideTimelinePanel(){
    this._timelineIsHidden.next(true);
  }

  getTimelineStatus(){
    return this._timelineIsHidden.asObservable();
  }



}
