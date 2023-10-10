import {Component, OnInit} from '@angular/core';
import {ITask} from "../task";
import {Router} from "@angular/router";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: []
})
export class TaskListComponent implements OnInit {
  public taskList: ITask[];
  public filterValue: boolean = false;
  public taskLength: number;
  public taskNotValidLength: number;

  constructor(private router: Router, private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskList = this.taskService.getTaskList();
    this.taskLength = this.taskList.length
    this.taskNotValidLength = this.taskService.getFilteredTask().length
  }

  handleDelete(id: number): void{
    this.taskService.deleteTask(id);
    this.taskLength = this.taskList.length
    this.taskNotValidLength = this.taskService.getFilteredTask().length
  }

  getFilter(): void  {
    if(!this.filterValue){
      this.taskList = this.taskService.getFilteredTask();
      this.filterValue = !this.filterValue
    }else{
      this.taskList = this.taskService.getTaskList();
      this.filterValue = !this.filterValue
    }
  }

  goToTask(task: ITask): void {
    this.router.navigate(['/task', task.id])
  }
}
