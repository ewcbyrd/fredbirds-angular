import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../event';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  @Input() event!: Event;
}
