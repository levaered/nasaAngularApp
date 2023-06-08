import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiKeyService } from '../api-key.service';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.scss']
})
export class MarsComponent implements OnInit {
  apiKey: string;
  photos: any[] = []; 

  constructor(private apiKeyService: ApiKeyService, private http: HttpClient) {
    this.apiKey = this.apiKeyService.getMyVariable();
  }

  ngOnInit() {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${this.apiKey}`;

    this.http.get(url).subscribe((response: any) => {
      this.photos = response.photos;
      console.log(this.photos); 
    });
  }
}

