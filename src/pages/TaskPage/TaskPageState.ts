import Task from "../../Models/Task";


export default interface TaskPageState {
    tasks: Task[],
    newTask?: Task
}