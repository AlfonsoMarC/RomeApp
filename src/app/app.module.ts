import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing , appRoutingProviders} from './app.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FpwComponent } from './components/fpw/fpw.component';
import { FpwMap1Component } from './components/fpw-map1/fpw-map1.component';
import { ErrorComponent } from './components/error/error.component';
import { TimelineMenuComponent } from './components/timeline-menu/timeline-menu.component';
import { SpwComponent } from './components/spw/spw.component';
import { TpwComponent } from './components/tpw/tpw.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { FpwBattle1Component } from './components/fpw-battle1/fpw-battle1.component';
import { MapSelectorComponent } from './components/map-selector/map-selector.component';
import { FpwMap2Component } from './components/fpw-map2/fpw-map2.component';
import { FpwMap3Component } from './components/fpw-map3/fpw-map3.component';
import { FrameComponent } from './components/frame/frame.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FpwComponent,
    FpwMap1Component,
    ErrorComponent,
    TimelineMenuComponent,
    SpwComponent,
    TpwComponent,
    MainHeaderComponent,
    FpwBattle1Component,
    MapSelectorComponent,
    FpwMap2Component,
    FpwMap3Component,
    FrameComponent,
    SubtitleComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FlexLayoutModule,
    DragDropModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
  appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
