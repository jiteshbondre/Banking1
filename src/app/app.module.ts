import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { ProfileComponent } from './profile/profile.component';
import { CalculationComponent } from './calculation/calculation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpenAccountComponent,
    ProfileComponent,
    CalculationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
