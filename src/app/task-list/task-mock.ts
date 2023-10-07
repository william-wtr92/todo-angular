import {ITask} from "./task";

export const TaskList : ITask[] = [
  {
    id: 1,
    name: "My First Task",
    created: new Date(),
    hidden: false,
    validate: false
  },
  {
    id: 2,
    name: "My Second Task",
    created: new Date(),
    hidden: false,
    validate: true
  },
  {
    id: 3,
    name: "My Third Task",
    created: new Date(),
    hidden: false,
    validate: false
  },
]
