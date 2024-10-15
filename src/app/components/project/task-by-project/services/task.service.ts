import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Task } from '../models/task';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTaskByProject(projectId: number) {
    return this.http.get<Task[]>(`${url}/todos?userId=${projectId}`);
  }
}
