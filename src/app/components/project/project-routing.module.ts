import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './list-project/project.component';
import { authGuard } from 'src/app/core/auth.guard';
import { TaskByProjectComponent } from './task-by-project/task-by-project.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectComponent,
    canActivate: [authGuard]
  },
  {
    path: 'task/:projectId',
    component: TaskByProjectComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
