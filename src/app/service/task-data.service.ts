import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
//import { Task } from "../models/task";
//import { NgForOf } from "@angular/common";
//import { TasksComponent } from "../modules/tasks/tasks.component";
import { Task } from "../models/task";
import { TasksComponent } from "../modules/tasks/tasks.component";
import { T } from "@angular/core/src/render3";

@Injectable()
export class TaskDataService {
  url: string = "http://localhost:4200/tasks";
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  constructor(private http: HttpClient) {}
}
