import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

}
