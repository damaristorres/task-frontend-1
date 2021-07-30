import { Injectable } from '@angular/core';
import { SubTask } from './subtask.model';
import { HttpClient } from '@angular/common/http';
import { Task } from '../task/task.model';

@Injectable({
  providedIn: 'root'
})
export class SubtaskService {
  
  url = "http://localhost:3000/subtask/";

  task: Task;
  subtask: SubTask;

  constructor(   
     private http: HttpClient
  ) {

    this.task = new Task();
    this.subtask = new SubTask();

  }

   getAll(){
    return this.http.get<SubTask[]>(this.url);
  }

  getByIdTask(taskId: number){
    return this.http.get<SubTask[]>(this.url + 'task/' + taskId);
  }

  getById(id: any) {
    return this.http.get<SubTask>(this.url + id);
  }

  //Crear
  add(subtask: SubTask) {
    return this.http.post<SubTask>(this.url, subtask);
  }

  update(subtask: SubTask) {
    return this.http.put<SubTask>(this.url + subtask.id, subtask);
  }

  delete(id: any) {
    return this.http.delete(this.url + id);
  }

}
