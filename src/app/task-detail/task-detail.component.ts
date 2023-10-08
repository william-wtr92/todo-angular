import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ITask} from "../task-list/task";
import {TaskList} from "../task-list/task-mock";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit{
  public taskId: number;
  public taskList : ITask[] = TaskList
  public taskDetail : ITask;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit():void {
   const pathId: string | null = this.route.snapshot.paramMap.get('id');
    if (typeof pathId === "string") {
      this.taskId = parseInt(pathId)
    }

    this.getTask(this.taskId)
  }

  getTask(id: number): void{
    const taskSelected: ITask | undefined = this.taskList.find(task => task.id === id )
    if(taskSelected){
      this.taskDetail = taskSelected
      console.log(taskSelected)
    }else {
      console.log("Task not found")
    }
  }
}
