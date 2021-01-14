import { ChangeDetectorRef, Component } from '@angular/core';
import PHOTOS from './photos';

const MIN_PAGE_TIMEOUT = 2000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'RomeApp';
  public w: number;
  public shrinkedVersion: boolean;

  // this will be true once all the photos are preloaded
  public ready = false;
  private _preloaded = false;
  private _timeoutDone = false;
  public percentage = 0;

  constructor(private _cd: ChangeDetectorRef) {
    this.w = window.innerWidth;
    this.shrinkedVersion = null;
  }

  ngOnInit() {
    this.onResize();

    this.preloadPhotos(() => {
      this._preloaded = true;
      this.percentage = 100;
      this._onReady();
    }, (doneCount, totalCount) => {
      this.percentage = Math.ceil((doneCount / totalCount) * 100);
      this._cd.detectChanges();
    });

    setTimeout(() => {
      this._timeoutDone = true;
      this._onReady();
    }, MIN_PAGE_TIMEOUT);

  }

  private _onReady() {
    if (this._preloaded && this._timeoutDone) {
      this.ready = true;
      this._cd.detectChanges();
    }
  }

  preloadPhotos(onDoneCb: () => any, onProgressCb: (doneCount: number, totalCount: number) => any) {
    let count = 0;
    let done = false;
    const body = document.body;
    PHOTOS.forEach(photo => {
      const img = new Image();
      img.onload = onImageDone;
      img.src = photo.src;
    });

    function onImageDone() {
      if (!done && ++count >= PHOTOS.length) {
        done = true;
        onDoneCb();
      } else {
        onProgressCb(count, PHOTOS.length);
      }
    }
  }




  onResize() {
    this.w = window.innerWidth;
    this.shrinkedVersion = this.w > 768 ? false : true;
  }

}

