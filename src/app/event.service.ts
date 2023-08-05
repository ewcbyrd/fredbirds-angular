import { Injectable } from '@angular/core';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  api = 'https://fredbirds-api.herokuapp.com/';

  async getFutureEvents(months = 3) : Promise<Event[]> {
      const url = `${this.api}events/future/${months}`;
      const data = await fetch(url);
      return await data.json() ?? [];
  }

  async getEventById(eventId : string) : Promise<Event> {
    const url = `${this.api}events/details/${eventId}`;
    const data = await fetch(url);
    return await data.json() ?? [];
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
