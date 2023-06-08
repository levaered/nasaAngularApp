import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiKeyService } from '../api-key.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-sign-up',
  templateUrl: './log-in-sign-up.component.html',
  styleUrls: ['./log-in-sign-up.component.scss']
})
export class LogInSignUpComponent {
  apiKey: any;
  display: string = 'flex';

  constructor(private http: HttpClient, private apiKeyService: ApiKeyService, private router: Router) {
    this.apiKey = apiKeyService.getMyVariable();
  }

  openLinkInNewWindow() {
    window.open('https://api.nasa.gov/', '_blank');
  }

  closeLogInSignUp(){
    this.display = 'none';
  }

  logIn() {
    const apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=' + this.apiKey;
    this.apiKeyService.setMyVariable(this.apiKey);
  
    this.http.get(apiUrl).subscribe(
      (data: any) => {
        this.router.navigate(['/mars-component']);
        this.closeLogInSignUp();
      },
      (error: any) => {
        if (error.status === 403) {
          if (error.error?.code === "API_KEY_INVALID") {
            alert("NASA API Key Incorrect");
          } else if (error.error?.code === "API_KEY_MISSING") {
            alert("NASA API Key Missing");
          } else {
            alert("Access to the resource is forbidden");
          }
        } else {
          alert("An unexpected error occurred");
        }
      }
    );
  }
}
