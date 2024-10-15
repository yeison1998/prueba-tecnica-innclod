import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from './models/task';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalTaskComponent } from './modal-task/modal-task.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-by-project',
  templateUrl: './task-by-project.component.html',
  styleUrls: ['./task-by-project.component.scss']
})
export class TaskByProjectComponent implements OnInit {

  projectId: number;
  tasks: Task[] = [];
  p: number = 1;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private location: Location, public dialog: MatDialog) {

    this.route.params.forEach(param => {
      this.projectId = param['projectId'];
    });
  }

  ngOnInit(): void {
    this.getTaskByProject();
  }

  getTaskByProject(): void {
    this.taskService.getTaskByProject(this.projectId).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  openDialog(task: Task | null, action: string): void {
    this.dialog.open(ModalTaskComponent, {
      maxWidth: '750px',
      width: '40%',
      data: { task, action }
    }).afterClosed().subscribe(task => {
      if (action === 'Editar') {
        this.edit(task);
      } else {
        this.saveTask(task);
      }
    });
  }

  saveTask(task: Task): void {
    this.tasks.push(task);
  }

  edit(taskEdit: Task): void {
    let index = this.tasks.findIndex(task => task.id === taskEdit.id);
    if (index !== -1) {
      this.tasks[index] = taskEdit;
    }
  }

  delete(taskDelete: Task): void {
    Swal.fire({
      title: "¿Estás seguro de que deseas eliminar esta tarea? ",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      confirmButtonColor: '#32CD32'
    }).then((result) => {
      if (result.isConfirmed) {
        let index = this.tasks.findIndex(task => task.id === taskDelete.id);
        if (index !== -1) {
          this.tasks.splice(index, 1);
          Swal.fire("Eliminado!", "", "success");
        }
      }
    });
  }

  pageBack(): void {
    this.location.back();
  }

}
