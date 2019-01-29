import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { ProjectItemComponent } from './project-item/project-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListingComponent,
    ProjectItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
