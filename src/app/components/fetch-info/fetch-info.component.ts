import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FetchTrainRequest } from "src/app/model/fetchTrainsRequest";

@Component({
  selector: 'app-fetch-info',
  templateUrl: './fetch-info.component.html',
  styleUrls: ['./fetch-info.component.scss']
})
export class FetchInfoComponent implements OnInit {

  @Output() search = new EventEmitter<FetchTrainRequest>();

  constructor() { }

  stations = [
    {
        "code": "LKO",
        "name": "Lucknow"
    },
    {
        "code": "NDLS",
        "name": "New Delhi"
    },
    {
        "code": "GZB",
        "name": "Ghaziabad"
    },
    {
        "code": "BLY",
        "name": "Bareily"
    },
    {
        "code": "MD",
        "name": "Muradabad"
    },
    {
        "code": "HP",
        "name": "Hapur"
    }
]

  ngOnInit(): void {
  }

  fetchTrains(details : FetchTrainRequest){
    console.log(details);
    this.search.emit(details);
  }
  
}
