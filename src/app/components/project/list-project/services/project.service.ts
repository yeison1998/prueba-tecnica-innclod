import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Project } from '../models/project';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProject() {
    return this.http.get<Project[]>(`${url}/users`);
  }
}
