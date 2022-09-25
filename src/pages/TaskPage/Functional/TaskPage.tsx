import React, {useState} from "react";
import Task from "../../../Models/Task";
import {AddIcon, Button, Flex, Input, Label} from '@lokalise/louis';
import TaskPageState from "../TaskPageState";
import TaskComponent from "../../../components/TaskComponent/Functional/TaskComponent";




const TaskPage = () => {
    const [state, setState] = useState<TaskPageState>({
        tasks: []
    })

    const onTaskTitleChange = (value: string): void => {
        setState({...state, newTask: new Task(value)})
    }

    const addTaskToList = (): void => {
        if (!state.newTask?.title) {
            return;
        }

        setState({
            tasks: [state.newTask, ...state.tasks],
            newTask: undefined
        });
    }

    return (
        <div>
            <Flex gap={3}>
                <Label text="Task title">
                    <Input
                        clearable
                        onValueChange={onTaskTitleChange}
                        placeholder="Test task"
                        value={state.newTask?.title ?? ''}
                    />
                </Label>
                <Button appearance="primary" onClick={addTaskToList} leftIcon={<AddIcon />}>
                    Add
                </Button>
            </Flex>

            <Flex direction={"column"} gap={2} style={{marginTop: 30}}>
                {state.tasks.map((task) =>
                    <TaskComponent task={task}/>
                )}
            </Flex>
        </div>
    );
}


export default TaskPage;
