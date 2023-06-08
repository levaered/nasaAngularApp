import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APODComponent } from './apod/apod.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { EarthComponent } from './earth/earth.component';
import { MarsComponent } from './mars/mars.component';
import { EPICComponent } from './epic/epic.component';
import { LogInSignUpComponent } from './log-in-sign-up/log-in-sign-up.component';
import { ApiKeyService } from './api-key.service';

@NgModule({
  declarations: [
    AppComponent,
    APODComponent,
    AsteroidsComponent,
    EarthComponent,
    MarsComponent,
    EPICComponent,
    LogInSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiKeyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
