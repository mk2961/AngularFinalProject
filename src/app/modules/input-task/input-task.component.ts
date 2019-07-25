import { Component, OnInit, Input } from "@angular/core";
import { Task } from "../../models/task";
import { TasksComponent } from "../tasks/tasks.component";
import { T } from "@angular/core/src/render3";
import { ValueTransformer } from "@angular/compiler/src/util";

@Component({
  selector: "app-input-task",
  templateUrl: "./input-task.component.html",
  styleUrls: ["./input-task.component.css"]
})
export class InputTaskComponent implements OnInit {
  name() {
    var input = document.getElementById("userID");

    alert("userID");
  }
  index() {
    var index = document.getElementsByTagName("userName");
    alert("userName");
  }
  onAddMe(id, name) {
    Task[name].add(id, name);
  }
  onDeleteMe(id) {
    Task[id].pop(id);
  }

  constructor() {}

  ngOnInit() {}
}
