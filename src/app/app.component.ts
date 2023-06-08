import { Component } from '@angular/core';
import { ApiKeyService } from './api-key.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nasaAngularApp';
  apiKeyService: ApiKeyService;

  constructor(apiKeyService: ApiKeyService) {
    this.apiKeyService = apiKeyService;
  }

  deleteKey() {
    this.apiKeyService.setMyVariable("");
  }
}
