import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NgIconsModule } from "@ng-icons/core";
import { heroPencilSquare } from "@ng-icons/heroicons/outline";
import { TaskFormComponent } from './task-form/task-form.component'
import { AppRoutingModule } from "./app-routing.module";
import { TaskDetailComponent } from './task-detail/task-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ heroPencilSquare }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
