import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubtaskEditComponent } from './subtask-edit/subtask-edit.component';
import { SubtaskListComponent } from './subtask-list/subtask-list.component';

const routes: Routes = [
  { path: '', component: SubtaskListComponent },
  { path: 'nuevo', component: SubtaskEditComponent },
  { path: ':id', component: SubtaskEditComponent }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
