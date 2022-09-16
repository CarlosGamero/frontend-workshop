import React, {CSSProperties} from "react";
import {Flex} from "@lokalise/louis";
import Task from "../../Models/Task";
import {TaskTitle} from "./style";


interface TaskComponentProps{
    task: Task
}

export default class TaskComponent extends React.Component<TaskComponentProps>{

    private style: CSSProperties = {
        backgroundColor: this.props.task.bgColor,
        width: '100%',
        padding: '20px 5px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        borderRadius: 40
    }

    shouldComponentUpdate(): boolean {
        return false;
    }

    render() {
        return (
            <Flex justify={"center"} style={this.style}>
                <TaskTitle> {this.props.task.title} </TaskTitle>
            </Flex>
        );
    }
}