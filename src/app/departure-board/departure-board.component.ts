import { Component, OnInit } from '@angular/core';
import { Departure } from '../departure';
import { DepartureService } from '../departure.service';

@Component({
  selector: 'app-departure-board',
  templateUrl: './departure-board.component.html',
  styleUrls: ['./departure-board.component.css']
})
export class DepartureBoardComponent implements OnInit {
  currentDateTime: Date;
  departures: Departure[];

  constructor(private departureService: DepartureService) { }

  ngOnInit() {
    this.refreshData();
    setInterval(() => this.refreshData(), 30000); // refresh data every 30 seconds
  }

  refreshData(): void {
    this.currentDateTime = new Date();
    this.departureService.getDepartures()
      .subscribe(departures => this.departures = departures);
      
  }

}
