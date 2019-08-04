import React, {Component} from 'react';
import { Button, Card, CardSection, Input} from './common';

class LoginForm extends Component{

    state = { text: ''};


    render(){
        return(
            <Card>
                <CardSection>
                 {/* 
                 By default TextInput does not have width and heigth(0), like image
                */}
                <Input 
                    label="Email :"
                    value={this.state.text}
                    onChangeText = { text => this.setState({ text })}
                />   
                </CardSection>

                <CardSection />
                
                <CardSection>
                    <Button>
                    Log in    
                    </Button>    
                </CardSection> 
            </Card>

        );
    }
}


export default LoginForm;