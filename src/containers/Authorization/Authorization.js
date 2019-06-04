import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import {Link} from "react-router-dom";


class Authorization extends Component {
    state = {
        login: "",
        password: ""
    };
    inputChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        return (
            <Container>
                <Form inline className="d-flex flex-column justify-content-around">
                    <FormGroup style={{marginBottom: "15px"}}>
                        <Label for="login" className="mr-sm-2">Логин</Label>
                        <Input
                            type="text"
                            name="login"
                            id="login"
                            value={this.state.login}
                            onChange={this.inputChangeHandler}
                        />
                    </FormGroup>
                    <FormGroup style={{marginBottom: "15px"}}>
                        <Label for="password" className="mr-sm-2">Пароль</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.inputChangeHandler}
                        />
                    </FormGroup>
                    <Button
                        tag={Link}
                        to={"/cabinet/"+ this.state.login + "/" + this.state.password}
                        color="primary"
                    >
                        Войти
                    </Button>

                </Form>
            </Container>
        );
    }
}

export default Authorization;