import { Component } from '@angular/core';
import { ApiKeyService } from '../api-key.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class APODComponent {
  apiKey: string;
  apodPhoto: string = '';
  description: string = '';
  title: string = '';
  date: string = '2015-09-07';
  currentDate: string;

  constructor(private apiKeyService: ApiKeyService, private http: HttpClient) {
    this.apiKey = this.apiKeyService.getMyVariable();
    this.currentDate = new Date().toISOString().split('T')[0];
  }

  ngOnInit() {
    this.fetchApodPhoto();
  }

  fetchApodPhoto() {
    if (this.date <= this.currentDate) {
      const apiUrl = `https://api.nasa.gov/planetary/apod?date=${this.date}&api_key=${this.apiKey}`;

      this.http.get(apiUrl).subscribe((response: any) => {
        this.apodPhoto = response.url;
        this.title = response.title;
        this.description = response.explanation;
      });
    } else {
      alert("Error Date");
    }
  }
}
