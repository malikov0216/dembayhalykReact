import React, {Component, Fragment} from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Col} from 'reactstrap';
import {Link} from "react-router-dom";
import './Authorization.css';


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
            <Fragment>
                <img src="https://assets3.insales.ru/assets/1/5727/702047/v_1493949522/build/logo.png" alt="logo"/>
                <Container className="App">
                    <Form className="form">
                        <Col>
                            <FormGroup>
                                <Label>Логин</Label>
                                <Input
                                    type="text"
                                    name="login"
                                    placeholder="Введите свой логин"
                                    value={this.state.login}
                                    onChange={this.inputChangeHandler}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="examplePassword">Пароль</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="********"
                                    value={this.state.password}
                                    onChange={this.inputChangeHandler}
                                />
                            </FormGroup>
                        </Col>
                        <Button
                            className="btnA"
                            block
                            tag={Link}
                            color="primary"
                            to={'/cabinet/' + this.state.login + '/' + this.state.password}
                        >
                            Войти
                        </Button>
                    </Form>
                </Container>
            </Fragment>
        );
    }
}

export default Authorization;