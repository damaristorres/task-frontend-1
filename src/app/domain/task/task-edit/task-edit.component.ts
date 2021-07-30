import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {getDescription, NivelPrioridad } from 'src/app/enums/prioridad.enum';
import {getStatusDescription } from 'src/app/enums/status.enum';
import { Status } from 'src/app/enums/status.enum';
import { SubTask } from '../../subtask/subtask.model';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { SubtaskService } from '../../subtask/subtask.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  //atributos
  task = new Task();

  isModoEdicion: boolean = false;

  niveles = Object.values(NivelPrioridad).map(value => ({ label: getDescription(value), value: value}));

  estados = Object.values(Status).map(value => ({ label: getStatusDescription(value), value: value}));

  ruta = "/task";

  titulo: string;

  subtask: SubTask[] = [];

  display: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: TaskService,
    private subtaskService: SubtaskService,
    private confirmationService: ConfirmationService

  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.activatedRoute.paramMap
      .subscribe(
        (paramMap) => {
          const id = paramMap.get('id');

          if (id) {
            this.isModoEdicion = true;
            this.titulo = "Edit Task";
            this.service.getById(id)
              .subscribe(
                (task) => {
                  this.task = task;
                  this.task.fechaCreacion = new Date(task.fechaCreacion);
                  this.getSubtaskById(task.id);
                },
                (error) => {
                  console.log("error al cargar " + error);
                }
              )
          } else {
            this.titulo = "Add Task";
          }

        }
      )
  }

  getSubtaskById(taskId: number){
    this.subtaskService.getByIdTask(taskId)
    .subscribe(
      (res) => {
        this.subtask = res;
        console.log(this.subtask);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  add() {
    this.service.add(this.task)
      .subscribe(
        () => {
          this.returnToList();
        },
        (error) => {
          console.error(error)
        }
      )
  }

  /*openNew() {
    this.subtaskService.add(this.subtasks)
    .subscribe(
      () => {
        this.returnList();
      },
      (error) => {
        console.error();
      }
    )
}*/

  update() {
    this.service.update(this.task)
      .subscribe(
        () => {
          this.returnToList();
        },
        (erro) => {
          console.error("Eror al actualizar " + erro);
        }
      )
  }

  /*addSubtask() {
    this.subtaskService.add(this.tasksk)
      .subscribe(
        () => {
          this.returnToList();
        },
        (error) => {
          console.error(error)
        }
      )
  }*/

  // getSubtasks(){
  //   this.subtaskService.getAll()
  //   .subscribe(
  //     (res) => {
  //       this.subtask = res;
  //       console.log(this.subtask);
  //     },
  //     (err) => {
  //       console.error(err);
  //     }
  //   )
  // }

  // deleteSubtask(id: any) {
  //   this.confirmationService.confirm({
  //     message: 'Está seguro que desea eliminar esta tarea?',
  //     accept: () => {
  //       this.service.delete(id)
  //         .subscribe(
  //           (res) => {
  //             this.getSubtasks();
  //           },
  //           (error) => {
  //             this.display = true;
  //           }
  //         )
  //     },
  //     acceptLabel: "Confirmar",
  //     acceptButtonStyleClass: "p-button-danger p-mr-2"
  //   });
  // } 
  

  returnToList() {
    this.router.navigate([this.ruta]);
  }
  
}
