import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from './mock.projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  projects: Array<Project> = PROJECTS;

  constructor() { }

  ngOnInit() {
    this.projects = this.projects.sort((a, b) => {
      return b.createdDate.getTime() - a.createdDate.getTime();
    });
  }

  // need a function for a random length

}
