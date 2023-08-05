import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

    constructor(private http : HttpClient){}

  api = 'https://fredbirds-api.herokuapp.com/';

  getFutureEvents(months = 3) : Observable<any> {
    const url = `${this.api}events/future/${months}`;
    return this.http.get(url);
  } 

  getEventById(eventId : string) {
    const url = `${this.api}events/details/${eventId}`;
    return this.http.get(url);
  }

  getEventDate(startDate : Date, endDate : Date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let dateText = '';
    let start = new Date(startDate);
    let end = new Date(endDate);
    const startMonth = monthNames[start.getUTCMonth()];
    dateText = `${startMonth} ${start.getUTCDate()}`;
    if (endDate) {
        const endMonth = monthNames[end.getUTCMonth()];
        if (startMonth === endMonth) {
            dateText += ` - ${end.getUTCDate()}`;
        } else {
            dateText += ` - ${endMonth} ${monthNames[end.getUTCDate()]}`;
        }
    }
    return dateText;

}
}
