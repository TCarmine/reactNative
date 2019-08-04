import React, {Component} from 'react';
import { Button, Card, CardSection, Input} from './common';

class LoginForm extends Component{

    state = { email: ''};


    render(){
        return(
            <Card>
                <CardSection>
                 {/* 
                 By default TextInput does not have width and heigth(0), like image
                */}
                <Input 
                    placeholder="here your email"
                    label="Email :"
                    value={this.state.email}
                    onChangeText = { email => this.setState({ email })}
                   
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