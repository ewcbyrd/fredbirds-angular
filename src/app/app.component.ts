import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule, RouterLink, RouterOutlet],
})
export class AppComponent {
  title = 'fredbirds-angular';
}
