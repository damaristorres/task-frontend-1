import { Component, OnInit } from '@angular/core';
import { Task } from '../../task/task.model';
import { SubTask } from '../subtask.model';
import { SubtaskService } from '../subtask.service';
import { TaskService } from '../../task/task.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-subtask-list',
  templateUrl: './subtask-list.component.html',
  styleUrls: ['./subtask-list.component.css']
})
export class SubtaskListComponent implements OnInit {

  task: Task[] = [];
  subtask: SubTask[]= [];

  display: boolean = false;

  constructor(
    private service: TaskService,
    private SubtaskService: SubtaskService,
    private ConfirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.getSubtasks();
  }

  getSubtasks(){
    this.service.getAll()
    .subscribe(
      (res) => {
        //this.subtask = res;
        console.log(this.subtask);
      },
      (err) => {
        console.error(err);
      }
    )

  }

  delete(id: any) {
    this.ConfirmationService.confirm({
      message: '¿Está seguro que desea eliminar esta entidad?',
      accept: () => {
        this.service.delete(id)
          .subscribe(
            (res) => {
              this.getSubtasks();
            },
            (error) => {
              this.display = true;
            }
          )
      },
      acceptLabel: "Confirmar",
      acceptButtonStyleClass: "p-button-danger p-mr-2"
    });
  }

}
