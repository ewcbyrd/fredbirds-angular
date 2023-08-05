import {HttpClientModule} from '@angular/common/http'
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent,
  {providers: [importProvidersFrom(HttpClientModule), provideProtractorTestingSupport(), provideRouter(routeConfig)]})
.catch(err => console.error(err));