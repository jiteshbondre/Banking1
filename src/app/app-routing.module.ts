import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationComponent } from './calculation/calculation.component';
import { HomeComponent } from './home/home.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{path:"account",component:OpenAccountComponent},
{path:"profile",component:ProfileComponent}
,{path:"home",component:HomeComponent},
{path:"cal",component:CalculationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
