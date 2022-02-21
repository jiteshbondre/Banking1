import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { ProfileComponent } from './profile/profile.component';
import { CalculationComponent } from './calculation/calculation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanDetailsComponent } from './loan-details/loan-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpenAccountComponent,
    ProfileComponent,
    CalculationComponent,
    LoanDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule , 
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
