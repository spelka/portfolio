import { Component, OnInit } from '@angular/core';
import { experiences } from './../data/experiences';

@Component({
  selector: 'app-experience-listing',
  templateUrl: './experience-listing.component.html',
  styleUrls: ['./experience-listing.component.css']
})
export class ExperienceListingComponent implements OnInit {

    //assign imported projects data to the projects array
    experiences: Array<any> = experiences; 

  constructor() { }

  ngOnInit() {
  }

  
}
