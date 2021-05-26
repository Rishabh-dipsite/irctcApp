import { Component, OnInit } from '@angular/core';
import { FetchTrainRequest } from 'src/app/model/fetchTrainsRequest';

@Component({
  selector: 'app-train-center',
  templateUrl: './train-center.component.html',
  styleUrls: ['./train-center.component.scss']
})
export class TrainCenterComponent implements OnInit {

  trains = [
    {
        "_id":12230,
        "name":"Lucknow Mail",
        "totalSeats":320,
        "scheduleId":1,
        "runningDays":["M", "Th"]
    },
    {
        "_id":12003,
        "name":"Swarn Shatabdi",
        "totalSeats":280,
        "scheduleId":2,
        "runningDays":["Tu", "F"]
    }
]

  constructor() { }

  ngOnInit(): void {
  }

  HandleSearch(req : FetchTrainRequest){
  }

  bookTrain(id : number){
    debugger;
  }
}
