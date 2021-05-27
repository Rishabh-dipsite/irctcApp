import { Component, OnInit } from '@angular/core';
import { FetchTrainRequest } from 'src/app/model/fetchTrainsRequest';
import { Station } from 'src/app/model/stations';
import { TrainDetails } from 'src/app/model/trainDetails';
import { TrainService } from "src/app/_services/train.service";

@Component({
  selector: 'app-train-center',
  templateUrl: './train-center.component.html',
  styleUrls: ['./train-center.component.scss']
})
export class TrainCenterComponent implements OnInit {

  trains : [TrainDetails]

stations : [Station]

  constructor(private _trainService : TrainService) { }

  ngOnInit(): void {
    this._trainService.fetchStations().subscribe(res => {
      this.stations = res
    }, err => console.log(err)
    )
  }

  HandleSearch(req : FetchTrainRequest){
    this._trainService.fetchTrainsAvailable(req).subscribe(res => {
      this.trains = res;
      
    }, err => console.log(err)
    )
  }

  bookTrain(id : number){
    let trainIndex = this.trains.findIndex(x => x._id === id)
    this.trains[trainIndex].availability--;    
  }
}
