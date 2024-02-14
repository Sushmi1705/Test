import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDetailsComponent } from './registration/show-details/show-details.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  // { path: '', redirectTo: '/show-details', pathMatch: 'full' },
  { path: 'show-details', component: ShowDetailsComponent },
  { path: 'registration-form', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
