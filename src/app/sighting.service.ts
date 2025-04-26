import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SightingService {

  readonly baseUrl = 'https://fredbirds-api.herokuapp.com/';

  constructor(private http : HttpClient) {   
  }

  getSightingsByLocation(regionCode : string, daysBack : string)  {
    const url = `${this.baseUrl}sightings/location/${regionCode}?back=${daysBack}`;
    return this.http.get(url);
  }
}
