import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

//***Profiles Section***

import { ProfilesComponent } from './profile/profiles.component';
import { ProfilesService } from './profile/services/profiles.service';
import { ProfilesBackendService } from './services/profiles-backend';
import { HttpProfilesBackendService } from './services/http-profiles-backend.service'
import { ProfileDetailsComponent } from './profile/profile-details. component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ProfilesComponent,
    ProfileDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProfilesComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'profile', component: ProfilesComponent },
      { path: 'profile/new-profile', component: ProfileDetailsComponent },
      { path: 'profile/profile-details/:id', component: ProfileDetailsComponent },
      { path: 'profile/profile-update/:id', component: ProfileDetailsComponent }
    ])
  ],
  providers: [
    ProfilesService,
    { provide: ProfilesBackendService, useClass: HttpProfilesBackendService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
