import React, {CSSProperties} from "react";
import {Flex} from "@lokalise/louis";
import Task from "../../../Models/Task";
import {TaskTitle} from "../style";
import TaskComponentProps from "../TaskComponentProps";

const style: CSSProperties = {
    width: '100%',
    padding: '20px 5px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    borderRadius: 40
}

const TaskComponent = (props: TaskComponentProps) => {
    return (
        <Flex justify={"center"} style={{...style, backgroundColor: props.task.bgColor}}>
            <TaskTitle> {props.task.title} </TaskTitle>
        </Flex>
    )
}

export default TaskComponent;
