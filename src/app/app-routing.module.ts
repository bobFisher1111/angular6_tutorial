import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component'; // added this for restfulGet component created
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; // got from the app.module

// Creating route
const routes: Route[] = [
  // only need path and component to match one another
  {path: '', redirectTo: '/home', pathMatch: 'full'}, // this makes it the default route
  {path: 'home', component: HomeComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
