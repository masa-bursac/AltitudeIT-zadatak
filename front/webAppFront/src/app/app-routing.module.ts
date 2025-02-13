import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ObserveUsersComponent } from './observe-users/observe-users.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'welcome', component: LandingPageComponent},
  {path: '', pathMatch:'full', redirectTo: 'welcome'},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'allUsers', component: ObserveUsersComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
