import { Component, OnInit } from "@angular/core";

import { Task } from "../../models/task";
import { InputTaskComponent } from "../input-task/input-task.component";
import { TaskDataService } from "../../service/task-data.service";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [
    {
      id: 0,
      name: "Task1"
    },
    {
      id: 1,
      name: "Task2"
    },
    {
      id: 2,
      name: "Task3"
    }
  ];
  getTasks() {
    return this.tasks.valueOf();
  }

  constructor() {}

  ngOnInit() {
    this.getTasks();
  }
}
