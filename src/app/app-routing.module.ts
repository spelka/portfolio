import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ExperienceListingComponent } from './experience-listing/experience-listing.component';

const routes: Routes = [
  { path: '', redirectTo:'project-listing', pathMatch:'full'},
  { path: 'project-listing', component: ProjectListingComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'experience-listing', component: ExperienceListingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ProjectListingComponent, AboutMeComponent, ContactMeComponent, ExperienceListingComponent]
