import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = "http://localhost:3000/task/";

  constructor(
    private http: HttpClient
  ) {
    
  }

  getAll(){
    return this.http.get<Task[]>(this.url);
  }

  getById(id: any) {
    return this.http.get<Task>(this.url + id);
  }

  add(task: Task) {
    return this.http.post<Task>(this.url, task);
  }

  update(task: Task) {
    return this.http.put<Task>(this.url + task.id, task);
  }

  delete(id: any) {
    return this.http.delete(this.url + id);
  }

}
