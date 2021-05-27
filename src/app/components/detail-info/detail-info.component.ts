import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {daysOfWeek} from "src/app/utility/WeekDays";

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {

  @Input() trains : []
  @Output() book = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  bookTrain(id : number){
    this.book.emit(id);
  }

  getRunninDays(runningDays : []){
    return runningDays.map(x => daysOfWeek[x]).join();
  }

}
