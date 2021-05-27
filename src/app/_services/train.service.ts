import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Station } from "src/app/model/stations";
import { TrainDetails } from "src/app/model/trainDetails";
import { FetchTrainRequest } from '../model/fetchTrainsRequest';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  baseurl: string = 'http://localhost:3000/api/';
  constructor(private _http: HttpClient) { }

  fetchStations(): Observable<[Station]> {
    return this._http.get<[Station]>(this.baseurl + 'stations');
  }

  fetchTrainsAvailable(req: FetchTrainRequest) {
    // Call some API logic
    return this._http.get<[TrainDetails]>(this.baseurl + 'trains/' + req.source + '/' + req.destination + '/' + req.date);
  }
}
