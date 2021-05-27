import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FetchTrainRequest } from "src/app/model/fetchTrainsRequest";

@Component({
  selector: 'app-fetch-info',
  templateUrl: './fetch-info.component.html',
  styleUrls: ['./fetch-info.component.scss']
})
export class FetchInfoComponent implements OnInit {

  @Output() search = new EventEmitter<FetchTrainRequest>();

  constructor() { }

  @Input() stations

  ngOnInit(): void {
  }

  fetchTrains(details : FetchTrainRequest){
    console.log(details);
    this.search.emit(details);
  }
  
}
