import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TasksComponent } from "../modules/tasks/tasks.component";
import { AppComponent } from "../app.component";
import { InputTaskComponent } from "../modules/input-task/input-task.component";

const routes: Routes = [
  {
    path: "home",
    component: AppComponent
  },
  {
    path: "input",
    component: InputTaskComponent
  },
  {
    path: "tasks",
    component: TasksComponent
  }
];

@NgModule({
  imports: [CommonModule],
  declarations: [RouterModule]
})
export class AppRoutingModule {}
