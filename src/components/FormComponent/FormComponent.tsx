
import React from 'react';
import {Flex, Label} from "@lokalise/louis";
import { Input } from "@lokalise/louis";
import { Textarea } from '@lokalise/louis';
import { Button } from '@lokalise/louis';
import { ToastContainer, showToast } from '@lokalise/louis';
import {FormTitle } from "./style";




interface FormState {
    name: string;
    description: string;
    nameError?: string;
    descriptionError?: string;
}

class FormComponent extends React.Component<{}, FormState> {

    constructor(props: any) {
        super(props);

        this.state = {
            description: '',
            name: ''
        };
    }

    private setName(value: string): void {
        this.setState({
            name: value,
            nameError: value ? '' : 'This field can not be empty'
        });
    }

    private setDescription(value: string): void {
        this.setState({
            description: value,
            descriptionError: value ? '' : 'This field can not be empty'
        });
    }

    private sendForm(): void{
        let err = false;
        if (this.state.name.length && this.state.description.length) {
            err = true;
            this.setName(this.state.name);
            this.setDescription(this.state.description);
        }
        showToast({
            type: err ? 'error' : 'success',
            title: err ?
                'Form with errors' :
                'Form submitted'
        });
    }

    render() {
        return (
            <div>
                <ToastContainer/>
                <Flex justify={"center"} style={{marginBottom: 20}}>
                    <FormTitle>My first form</FormTitle>
                </Flex>

                <Flex direction={"column"} gap={2}>
                    <Label required text="Full name">
                        <Input
                            error={this.state.nameError ? this.state.nameError : false}
                            onChange={(e) => this.setName(e.target.value)}
                            placeholder="John Doe"
                            value={this.state.name}
                        />
                    </Label>
                    <Label required text="Description" >
                        <Textarea
                            error={this.state.descriptionError ? this.state.descriptionError : false}
                            onChange={(e) => this.setDescription(e.target.value)}
                            placeholder="I like to play COD"
                            value={this.state.description}
                        />
                    </Label>
                </Flex>

                <Flex justify={"center"} style={{marginTop: 20}}>
                    <Button
                        appearance="primary"
                        onClick={() => this.sendForm()}
                    >
                        Submit
                    </Button>
                </Flex>
            </div>
        );
    }
}

export default  FormComponent;