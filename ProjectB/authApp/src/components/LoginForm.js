import React, {Component} from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection} from './common';

class LoginForm extends Component{

    state = { text: ''};


    render(){
        return(
            <Card>
                <CardSection>
                 {/* 
                 By default TextInput does not have width and heigth(0), like image
                */}
                <TextInput 
                    value={this.state.text}
                    onChangeText = { text => this.setState({ text })}
                    style={{ height:50, width:150}}/>   
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