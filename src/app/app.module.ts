import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { TasksComponent } from "./modules/tasks/tasks.component";
import { InputTaskComponent } from "./modules/input-task/input-task.component";

@NgModule({
  declarations: [AppComponent, TasksComponent, InputTaskComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
