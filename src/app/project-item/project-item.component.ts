import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  //accept binding 'project' and assign it to a local property project: any
  @Input('project') project: any;
  constructor() { }

  ngOnInit() {
  }

}
