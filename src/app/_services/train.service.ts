import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Station } from "src/app/model/stations";

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  url : string = './database/';
  constructor(private _http: HttpClient) { }

  fetchStations(){
    return this._http.get<[Station]>(this.url + 'stations.json');
  }
}
