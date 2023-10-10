import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: []
})
export class AddTaskComponent implements OnInit{
  public newId: number;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.newId = this.taskService.getLastId() + 1;
  }
}
