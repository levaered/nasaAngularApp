import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiKeyService } from '../api-key.service';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.scss']
})
export class EPICComponent implements OnInit {
  apiKey: string;
  epicImages: string[] = [];

  constructor(private apiKeyService: ApiKeyService, private http: HttpClient) {
    this.apiKey = this.apiKeyService.getMyVariable();
  }

  ngOnInit() {
    this.fetchEpicDates();
  }

  fetchEpicDates() {
    const apiUrl = `https://api.nasa.gov/EPIC/api/natural?api_key=${this.apiKey}`;

    this.http.get(apiUrl).subscribe((response: any) => {
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          let date = response[key].date.split(' ')[0]; 
          date = date.replace(/-/g, '/'); 
          const image = response[key].image;
          this.fetchEpicImage(date, image);
        }
      }
    });
  }

  fetchEpicImage(date: string, image: string) {
    const imageUrl = `https://api.nasa.gov/EPIC/archive/natural/${date}/png/${image}.png?api_key=${this.apiKey}`;
    this.epicImages.push(imageUrl);
  }

  
}
