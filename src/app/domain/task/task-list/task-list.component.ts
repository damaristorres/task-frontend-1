import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  titulo = "Task List";

  display: boolean = false;

  ruta = "/task";

  constructor(
    private service: TaskService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.service.getAll()
      .subscribe(
        (res) => {
          this.tasks = res;
          console.log(this.tasks);
        },
        (err) => {
          console.error(err);
        }
      )
  }

  delete(id: any) {
    this.confirmationService.confirm({
      message: 'Está seguro que desea eliminar esta entidad?',
      accept: () => {
        this.service.delete(id)
          .subscribe(
            (res) => {
              this.getTasks();
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
