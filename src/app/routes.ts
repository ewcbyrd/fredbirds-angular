import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'event/:id',
      component: EventDetailsComponent,
      title: 'Event details'
    }
  ];
  
  export default routeConfig;