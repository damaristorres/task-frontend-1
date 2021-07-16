import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Dialog, DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';




@NgModule({
  declarations: [
    TaskListComponent,
    TaskEditComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    DropdownModule,
    HeaderModule,
    InputNumberModule,
    ConfirmDialogModule,
    ButtonModule,
    DialogModule,
    TableModule,
    CardModule,
    CalendarModule,
    InputTextareaModule
  ],
  providers:[
    TaskService,
    ConfirmationService,
    Dialog,
    MessageService
  ]
})
export class TaskModule { }
