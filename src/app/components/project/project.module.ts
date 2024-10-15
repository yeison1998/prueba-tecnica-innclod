import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './list-project/project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskByProjectComponent } from './task-by-project/task-by-project.component';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalProjectComponent } from './list-project/modal-project/modal-project.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { ModalTaskComponent } from './task-by-project/modal-task/modal-task.component';

@NgModule({
  declarations: [
    ProjectComponent,
    TaskByProjectComponent,
    ModalProjectComponent,
    ModalTaskComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatTooltipModule,
    NgxPaginationModule,
    MatDialogModule,
    MatCheckboxModule,
    MatInputModule
  ]
})
export class ProjectModule { }
