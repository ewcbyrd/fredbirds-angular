import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../event';
import { EventService } from '../event.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  eventId :  '-1';
  eventDetails : any;
  mapUrl : SafeUrl = '';
  showMap : boolean = false;

  constructor(public sanitizer: DomSanitizer, public eventService : EventService) {
    this.eventId = this.route.snapshot.params['id'];
    this.eventService.getEventById(this.eventId).subscribe((eventDetails) => {
      this.eventDetails = eventDetails;
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/place?key=AIzaSyCB3Q5szLx_1-UE-WIkFSgA3fFi7-KWFAM&q=${this.eventDetails.lat},${this.eventDetails.lon}&zoom=11`);
      this.showMap = this.eventDetails.lat != undefined && this.eventDetails.lon != undefined;
    });
    
  }
}
