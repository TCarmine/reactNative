import React, {Component} from 'react';
import { Button, Card, CardSection, Input} from './common';

class LoginForm extends Component{
    
    state = { email: '',
              password:''
    };


    render(){
        return(
            <Card>
                <CardSection>
                    {/* 
                    By default TextInput does not have width and heigth(0), like image
                    */}
                    <Input 
                        placeholder="login with your email"
                        label="Email :"
                        value={this.state.email}
                        onChangeText = { email => this.setState({ email })}
                    /> 
                </CardSection> 
                <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder="enter your account password"
                        label="Password :"
                        value={this.state.password}
                        onChangeText = { password => this.setState({ password })}
                    />  

                </CardSection>

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