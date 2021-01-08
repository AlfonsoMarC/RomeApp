import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Frame } from '../models/frame';
import {Global} from './global'; 

@Injectable()
export class FrameService {
    public url: string;
    constructor(private _http: HttpClient) {
        this.url = Global.url; 
    }  

    getFrames(): Observable<any>{
        return this._http.get(this.url+'frame');
    }
}
