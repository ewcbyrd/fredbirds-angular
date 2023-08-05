import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from '../event/event.component';
import { Event } from '../event';
import { EventService } from '../event.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EventComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  eventList : Event[] = [];
  eventService : EventService = inject(EventService);
  
  constructor() {
    this.eventService.getFutureEvents().then((eventList : Event[]) => {
      eventList.forEach((item) => {
        item.date = this.eventService.getEventDate(item.start, item.end);
      })
      this.eventList = eventList;
    });
  }
}
