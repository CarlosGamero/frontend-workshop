import React from "react";
import TaskComponent from "../../../components/TaskComponent/OOP/TaskComponent";
import Task from "../../../Models/Task";
import {AddIcon, Button, Flex, Input, Label} from '@lokalise/louis';
import TaskPageState from "../TaskPageState";



export default class TaskPage extends React.Component<any, TaskPageState>{

    constructor(props: any) {
        super(props);
        this.state = {
            tasks: [],
        };

        this.onTaskTitleChange = this.onTaskTitleChange.bind(this);
        this.addTaskToList = this.addTaskToList.bind(this);
    }

    private onTaskTitleChange(value: string): void {
        this.setState({newTask: new Task(value)})
    }

    private addTaskToList(): void {
        if (!this.state.newTask?.title) {
            return;
        }

        this.setState({
            tasks: [this.state.newTask, ...this.state.tasks],
            newTask: undefined
        });
    }

    render() {
        return (
            <div>
                <Flex gap={3}>
                    <Label text="Task title">
                        <Input
                            clearable
                            onValueChange={this.onTaskTitleChange}
                            placeholder="Test task"
                            value={this.state.newTask?.title ?? ''}
                        />
                    </Label>
                    <Button appearance="primary" onClick={this.addTaskToList} leftIcon={<AddIcon />}>
                        Add
                    </Button>
                </Flex>

                <Flex direction={"column"} gap={2} style={{marginTop: 30}}>
                    {this.state.tasks.map((task) =>
                        <TaskComponent task={task}/>
                    )}
                </Flex>
            </div>
        );
    }
}