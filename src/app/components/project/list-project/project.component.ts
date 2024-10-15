import { Component, OnInit } from '@angular/core';
import { ProjectService } from './services/project.service';
import { Project } from './models/project';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalProjectComponent } from './modal-project/modal-project.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectService, private router: Router, private sharedService: SharedService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProject().subscribe(projects => {
      this.projects = projects;
    });
  }

  goToDetail(project: Project): void {
    this.router.navigate([`/task/${project.id}`]);
  }

  logOut(): void {
    this.sharedService.finishSessions();
    this.router.navigate(['/login'])
  }

  openDialog(project: Project | null, action: string): void {
    this.dialog.open(ModalProjectComponent, {
      maxWidth: '750px',
      data: { project, action }
    }).afterClosed().subscribe(project => {
      if (action === 'Editar') {
        this.edit(project);
      } else {
        this.saveProject(project);
      }
    });
  }

  saveProject(project: Project): void {
    this.projects.push(project);
  }

  edit(projectEdit: Project): void {
    let index = this.projects.findIndex(project => project.id === projectEdit.id);
    if (index !== -1) {
      this.projects[index] = projectEdit;
    }
  }

  delete(projectDelete: Project): void {
    Swal.fire({
      title: "¿Estás seguro de que deseas eliminar este proyecto? ",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      confirmButtonColor: '#32CD32'
    }).then((result) => {
      if (result.isConfirmed) {
        let index = this.projects.findIndex(project => project.id === projectDelete.id);
        if (index !== -1) {
          this.projects.splice(index, 1);
          Swal.fire("Eliminado!", "", "success");
        }
      }
    });
  }
}
