import { Component, OnInit } from "@angular/core";
import { Task } from "../../models/task";
import { TasksComponent } from "../tasks/tasks.component";
import { T } from "@angular/core/src/render3";

@Component({
  selector: "app-input-task",
  templateUrl: "./input-task.component.html",
  styleUrls: ["./input-task.component.css"]
})
export class InputTaskComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
