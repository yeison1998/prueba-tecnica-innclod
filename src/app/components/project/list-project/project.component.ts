import { Component, OnInit } from '@angular/core';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) {

  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProject().subscribe(projects => {
      debugger
    });
  }
}
