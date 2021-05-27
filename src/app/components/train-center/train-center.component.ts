import { Component, OnInit } from '@angular/core';
import { FetchTrainRequest } from 'src/app/model/fetchTrainsRequest';
import { Station } from 'src/app/model/stations';
import { TrainService } from "src/app/_services/train.service";

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

stations : [Station]

  constructor(private _trainService : TrainService) { }

  ngOnInit(): void {
    this._trainService.fetchStations().subscribe(res => {
      this.stations = res
    }, err => console.log(err)
    )
  }

  HandleSearch(req : FetchTrainRequest){
  }

  bookTrain(id : number){
    debugger;
  }
}
