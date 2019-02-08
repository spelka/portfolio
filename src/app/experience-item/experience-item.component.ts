import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {

  //accept binding 'experience' and assign it to a local property experience: any
  @Input('experience') experience: any;
  constructor() { }

  ngOnInit() {
  }

  
}
