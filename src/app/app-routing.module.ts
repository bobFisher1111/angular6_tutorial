import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component'; // added this for restfulGet component created
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; // got from the app.module
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';

// Creating route
const routes: Route[] = [
  // only need path and component to match one another
  {path: '', redirectTo: '/home', pathMatch: 'full'}, // this makes it the default route adding the '/' infront of home, if not then not to root
  {path: 'home', component: HomeComponent},
  {
    path: 'settings', 
    component: SettingsComponent,
    children: [
      // remove '/' infront of profile so it will work or it would go directly to root, this makes profile default to settings
      {path: '', redirectTo: 'profile', pathMatch: 'full'},  
      {path: 'profile', component: SettingsProfileComponent},
      {path: 'contact', component: SettingsContactComponent},
      // incase user puts invalid url after settings for settings it will automatically redirect to profile
      {path: '**',redirectTo: 'profile', pathMatch: 'full'}

    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
