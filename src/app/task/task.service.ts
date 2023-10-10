import {Injectable} from '@angular/core';
import {ITask} from "./task";
import {TaskList} from "./task-mock";

@Injectable()
export class TaskService {
    public taskTypes: string[] = ["Urgent", "Modéré", "Simple"];

    getTaskList(): ITask[] {
        return TaskList;
    }

    getTaskById(id: number): ITask | undefined {
        return TaskList.find(task => id == task.id);
    }

    getFilteredTask(): ITask[] {
        return TaskList.filter(task => !task.validate);
    }

    getTaskType(): string[] {
        return this.taskTypes.map(type => type);
    }

    getLastId(): number {
        const lastTaskId: string = TaskList.slice(-1).map(task => task.id).toString()

        return parseInt(lastTaskId)
    }

    deleteTask(id: number): void {
        const taskToDelete: ITask | undefined = TaskList.find(task => task.id === id);
        if (taskToDelete) {
            const index: number = TaskList.indexOf(taskToDelete);
            TaskList.splice(index, 1);
        }
    }
}
