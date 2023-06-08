import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiKeyService } from '../api-key.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.scss']
})
export class AsteroidsComponent implements OnInit {
  apiKey: string;
  firstDate: string = '2015-09-07';
  secondDate: string = '2015-09-08';
  dates: any = [];
  ids: any = [];
  estimated_diameters: any = [];
  close_approach_dates: any = [];

  constructor(
    private apiKeyService: ApiKeyService,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {
    this.apiKey = this.apiKeyService.getMyVariable();
  }

  ngOnInit() {
    this.fetchAsteroidInfo();
  }

  fetchAsteroidInfo() {
    // Валидация дат
    const firstDateObj = new Date(this.firstDate);
    const secondDateObj = new Date(this.secondDate);
  
    if (isNaN(firstDateObj.getTime()) || isNaN(secondDateObj.getTime())) {
      alert('Неверный формат даты');
      return;
    }
  
    if (firstDateObj > secondDateObj) {
      alert('Первая дата не может быть больше второй');
      return;
    }
  
    const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.firstDate}&end_date=${this.secondDate}&api_key=${this.apiKey}`;
  
    // Очистка переменных перед каждым запросом
    this.dates = [];
    this.ids = [];
    this.estimated_diameters = [];
    this.close_approach_dates = [];
  
    this.http.get(apiUrl).subscribe((response: any) => {
      const nearEarthObjects = response.near_earth_objects;
  
      for (const date in nearEarthObjects) {
        if (nearEarthObjects.hasOwnProperty(date)) {
          const asteroids = nearEarthObjects[date];
  
          for (const asteroid of asteroids) {
            this.dates.push(date);
            this.ids.push(asteroid.id);
            this.estimated_diameters.push(asteroid.estimated_diameter);
            this.close_approach_dates.push(asteroid.close_approach_data);
          }
        }
      }
  
      // Обновление шаблона
      this.cdr.detectChanges();
    });
  }  
}
