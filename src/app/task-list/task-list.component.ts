import { Component } from '@angular/core';
import {ITask} from "./task";
import {TaskList} from "./task-mock";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: []
})
export class TaskListComponent {
    public taskList : ITask[] = TaskList
}
