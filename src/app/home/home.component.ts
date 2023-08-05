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
  
  constructor(public eventService : EventService) {
    this.eventService.getFutureEvents().subscribe((eventList) => {
      eventList.forEach((item : Event) => {
        item.date = this.eventService.getEventDate(item.start, item.end);
      })
      this.eventList = eventList;
    });
  }
}
