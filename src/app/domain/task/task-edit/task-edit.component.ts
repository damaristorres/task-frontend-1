import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {getDescription, NivelPrioridad } from 'src/app/enums/prioridad.enum';
import {getStatusDescription } from 'src/app/enums/status.enum';
import { Status } from 'src/app/enums/status.enum';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: TaskService,
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

  returnToList() {
    this.router.navigate([this.ruta]);
  }

}
