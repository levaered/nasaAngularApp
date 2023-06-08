import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyService {
  private apiKey: any;

  constructor() { }

  setMyVariable(value: any) {
    this.apiKey = value;
  }

  getMyVariable() {
    return this.apiKey;
  }
}
