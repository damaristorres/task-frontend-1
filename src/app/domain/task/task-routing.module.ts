import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'nuevo', component: TaskEditComponent },
  { path: ':id', component: TaskEditComponent }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
