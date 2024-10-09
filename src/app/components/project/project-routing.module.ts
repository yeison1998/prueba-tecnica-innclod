import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './list-project/project.component';
import { authGuard } from 'src/app/core/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
