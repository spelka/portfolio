import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { ProjectItemComponent } from './project-item/project-item.component';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListingComponent,
    ProjectItemComponent, 
    RoutingComponents, AboutMeComponent, ContactMeComponent, ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
