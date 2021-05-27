import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FetchTrainRequest } from "src/app/model/fetchTrainsRequest";

@Component({
  selector: 'app-fetch-info',
  templateUrl: './fetch-info.component.html',
  styleUrls: ['./fetch-info.component.scss']
})
export class FetchInfoComponent implements OnInit {

  @Output() search = new EventEmitter<FetchTrainRequest>();
  @Output() findAll = new EventEmitter();
  @Input() stations

  constructor() { }

  ngOnInit(): void {
  }

  fetchTrains(details: FetchTrainRequest) {
    console.log(details);
    this.search.emit(details);
  }

  formValid(form){
    return form.valid && form.value.source != form.value.destination && this.validateDate(form.value.date)
  }

  validateDate(date){
    return new Date(date) >= new Date()
  }

  fetchAllTrains(){
    this.findAll.emit();
  }
}
