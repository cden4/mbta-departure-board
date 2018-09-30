import { formatDate } from '@angular/common';
import { HttpClient, HttpEvent, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Departure } from './departure';
import { DEPARTURES } from './mock-departures';

@Injectable({
  providedIn: 'root'
})
export class DepartureService {

  private url = 'https://api-v3.mbta.com/schedules';

  constructor(private http: HttpClient) { }

  private extractData(res: any, runTime: Date): Departure[] {
    //console.log(res); // for debugging

    //Destination: schedule.relationships.trip.headsign
    //Departure Time: schedule.attributes.departure_time
    //Station: schedule.relationships.stop.data.id e.g. "South Station"
    //Track Number: schedule.relationships.prediction.relationships.stop.data.id e.g. "South Station-10"
    //Boarding Status: schedule.relationships.prediction.attributes.status

    // Create maps for included data
    let included: any[] = res.included;

    let tripIdHeadsignMap: Map<string, string> = new Map<string, string>();
    let predictionIdMap: Map<string, { status: string, stopId: string }> = new Map<string, { status: string, stopId: string }>();

    if (included != undefined) { // included section does not exist when data section is empty
      for (var j = 0; j < included.length; j++) {
        let type: string = included[j].type;
        let id: string = included[j].id;

        if (type === 'trip') {
          let headsign: string = included[j].attributes.headsign;
          tripIdHeadsignMap.set(id, headsign);
        } else if (type === 'prediction') {
          let status: string = included[j].attributes.status;
          let stopId: string = included[j].relationships.stop.data.id;
          predictionIdMap.set(id, { status, stopId });
        }
      }
    }
    
    // Loop through schedule data to create Departures
    let maxDeparturesToDisplay: number = 20;
    let departures: Departure[];
    let departureCount: number = 0;

    let data: any[] = res.data;
    if (data == null) {
      departures = new Departure[0];
      console.log('Error: ' + res);
    } else {
      for (var i = 0; i < data.length && departureCount < maxDeparturesToDisplay; i++) {
        let id: string = data[i].id;

        let tripId: string = data[i].relationships.trip.data.id;
        let destination: string = tripIdHeadsignMap.get(tripId);

        let departureTime: string = data[i].attributes.departure_time; 

        let station: string = data[i].relationships.stop.data.id;

        let predictionId: string = data[i].relationships.prediction.data != null ? data[i].relationships.prediction.data.id : null;
        let predictionStopId: string = predictionIdMap.get(predictionId) && predictionIdMap.get(predictionId).stopId;

        // When track number is known, stop_id on prediction reflects that (e.g. 'South Station-10' instead of 'South Station').
        // platform_code on this stop's attributes also contains this data, but would require another roundtrip to the server to retrieve it.
        // Parse number from end of stopId and strip off leading zero. Default to 'TBD'.
        let trackNumber: string = predictionStopId && predictionStopId.indexOf('-') != -1 ? 
          Number(predictionStopId.substring(predictionStopId.indexOf('-') + 1)).toString() : 'TBD';
        
        // Use prediction status if prediction exists. Default to 'On time'.
        let boardingStatus: string = predictionIdMap.get(predictionId) != null ? predictionIdMap.get(predictionId).status : 'On time';
        
        // If scheduled time is less than current time, but a prediction exists, display it (train just departed or is late)
        // Otherwise, always display it
        if ((new Date(departureTime) < runTime && predictionId != null) || new Date(departureTime) >= runTime) {
          if (departures == null) {
            departures = new Array<Departure>(Math.min(data.length - i, maxDeparturesToDisplay));
          }

          let departure: Departure = 
          { 
            destination: destination,
            departureTime: departureTime,
            station: station,
            trackNumber: trackNumber,
            boardingStatus: boardingStatus
          }
          departures[departureCount] = departure;
          departureCount++;
        }
      }
    }

    return departures;
  }

  getDepartures(): Observable<Departure[]> {
    let now: Date = new Date();

    // Retrieve data starting 2 hours prior to now in case there are late trains
    let hours: number = now.getHours() - 2;

    // If current time is between midnight and 3 am, use prior day, with hour + 24
    if (hours <= 3) {
      now.setDate(now.getDate() - 1);
      hours = hours + 24;
    }

    let hoursStr: string = hours < 10 ? '0' + hours.toString() : hours.toString();

    let dateFilter: string = formatDate(now, 'yyyy-MM-dd', 'en-US');
    let minTimeFilter: string = hoursStr + ':' + formatDate(now, 'mm', 'en-US');

    let params: HttpParams = new HttpParams()
      .set('filter[stop]', 'North Station,South Station')
      .set('filter[direction_id]', '0')
      .set('filter[date]', dateFilter)
      .set('filter[min_time]', minTimeFilter)
      .set('sort', 'departure_time')
      .set('include', 'prediction,trip');

    console.log(this.url + '?' + params.toString()); // for debugging

    return this.http.get(this.url, { params }).pipe(map(res => this.extractData(res, now)));
    //return of (DEPARTURES); // return mock data for testing
  }

}
