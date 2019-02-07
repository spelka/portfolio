import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  { path: 'project-listing', component: ProjectListingComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'experience', component: ExperienceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ProjectListingComponent, AboutMeComponent, ContactMeComponent, ExperienceComponent]
