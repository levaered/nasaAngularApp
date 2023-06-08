import { Component } from '@angular/core';
import { ApiKeyService } from '../api-key.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss']
})
export class EarthComponent {
  selectedDate : string = '2018-01-01';
  longitude : number = -95.33;
  latitude : number = 29.78;
  apiKey : string;
  eartchPhoto : string = '';

  constructor(private apiKeyService: ApiKeyService, private http: HttpClient) {
    this.apiKey = this.apiKeyService.getMyVariable();
  }

  
  ngOnInit() {
    this.fetchEarthPhotos();
  }

  fetchEarthPhotos() {
    this.eartchPhoto = `https://api.nasa.gov/planetary/earth/imagery?lon=${this.longitude}&lat=${this.latitude}&date=${this.selectedDate}&dim=0.15&api_key=${this.apiKey}`;
  }
}
