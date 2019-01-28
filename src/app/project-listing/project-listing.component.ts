import { Component, OnInit } from '@angular/core';
import { projects } from './../data/projects';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.css']
})
export class ProjectListingComponent implements OnInit {

  //assign imported projects data to the projects array
  projects: Array<any> = projects; 

  constructor() { }

  ngOnInit() {
  }

}
