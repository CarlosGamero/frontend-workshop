
import React, {useState} from 'react';
import {Flex, Label, Input, Textarea, Button, ToastContainer, showToast} from "@lokalise/louis";
import {FormTitle } from "../style";
import FormState from "../FormState";


const FormComponent = () => {
    const [state, setState] = useState<FormState>({
        name: '',
        description: ''
    });

    const setName = (value: string): void => {
        setState({
            ...state,
            name: value,
            nameError: value ? '' : 'This field can not be empty'
        });
    }

    const setDescription = (value: string): void => {
        setState({
            ...state,
            description: value,
            descriptionError: value ? '' : 'This field can not be empty'
        });
    }

    const sendForm = (): void => {
        let err = false;
        if (!state.name.length || !state.description.length) {
            err = true;
            setName(state.name);
            setDescription(state.description);
        }

        showToast({
            type: err ? 'error' : 'success',
            title: err ?
                'Form with errors' :
                'Form submitted'
        });
    }

    return (
        <div>
            <ToastContainer/>
            <Flex justify={"center"} style={{marginBottom: 20}}>
                <FormTitle>My first form</FormTitle>
            </Flex>

            <Flex direction={"column"} gap={2}>
                <Label required text="Full name">
                    <Input
                        error={state.nameError ? state.nameError : false}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        value={state.name}
                    />
                </Label>
                <Label required text="Description" >
                    <Textarea
                        error={state.descriptionError ? state.descriptionError : false}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="I like to play COD"
                        value={state.description}
                    />
                </Label>
            </Flex>

            <Flex justify={"center"} style={{marginTop: 20}}>
                <Button
                    appearance="primary"
                    onClick={() => sendForm()}
                >
                    Submit
                </Button>
            </Flex>
        </div>
    );
}


export default  FormComponent;