import React, {Component} from 'react';
import {connect} from "react-redux";
import {Form, FormGroup, Label, Input, Button, FormText, Spinner, Container, Toast, ToastHeader, ToastBody, Row, Col, TabContent, TabPane, NavItem, Nav, NavLink} from 'reactstrap';
import {fetchLastSalary, fetchSumOfYearSalary, fetchSendMoney, fetchCurrentMoney} from "../../store/actions/actions";
import classnames from 'classnames';

class Cabinet extends Component {
    state = {
        id: "",
        amount: "",
        activeTab: '1',
        visible: false
    };
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    componentDidMount() {
        this.props.onFetchLastSalary(this.username, this.password);
        this.props.onFetchCurrentMoney(this.username, this.password);
    }
    inputChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };
    changeLoadingSum = (a) => {
        this.setState({loadingSum: a})
    };
    username = this.props.match.params.username;
    password = this.props.match.params.password;
    render() {
        if (this.props.loading) {
            return <div className="d-flex align-items-center flex-column">
                        Загурзка...
                        <Spinner color="primary" style={{width: "150px", height: "150px"}} />
                    </div>

        }
        return (
            <Container>
                <Row>
                    <Col md="3" sm="12">
                        <div className="p-3 bg-success my-2 rounded">
                            <Toast>
                                <ToastHeader>
                                    <span style={{fontSize: "25px"}}>{this.props.fullName}</span>
                                </ToastHeader>
                                <ToastBody>
                                    Доступно:
                                    <span style={{fontWeight: "bold"}}> {this.props.currentMoney}</span>
                                </ToastBody>
                            </Toast>
                        </div>
                    </Col>
                    <Col md="9" sm="12">
                        <div>
                            <Nav tabs className="d-flex flex-column flex-md-row">
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}
                                    >
                                        Последняя зарплата
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('2'); }}
                                    >
                                        Сумма зарплат
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '3' })}
                                        onClick={() => { this.toggle('3'); }}
                                    >
                                        Переводы
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '4' })}
                                        onClick={() => { this.toggle('4'); }}
                                    >
                                        Отправка отчета
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12" className="mb-3">
                                            <div className="mb-4">
                                                <h3>Ваша последняя зарплата</h3>
                                                {Object.keys(this.props.salary).map(items => {
                                                    return (
                                                        <p key={items}>{this.props.salary[items]}</p>
                                                    )
                                                })}
                                            </div>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="12" className="mb-3">
                                            <h3>Сумма зарплат</h3>
                                            {
                                                    Object.keys(this.props.sumOfYearSalary).map(items => {
                                                        return (
                                                            <p key={items}>
                                                                <b>{items} год</b>: {this.props.sumOfYearSalary[items]}$</p>
                                                        );
                                                    })

                                            }
                                            <Button
                                                color="primary"
                                                onClick={() => {
                                                    this.changeLoadingSum(true);
                                                    this.props.onFetchSumOfYearSalary(this.username, this.password)
                                                }
                                                }
                                            >
                                                Показать
                                            </Button>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Row>
                                        <Col sm="12" className="mb-3 d-flex flex-column align-items-around" style={{maxWidth: "400px"}}>
                                            <h3>Перевод денег</h3>
                                            <input
                                                type="text"
                                                name="id"
                                                placeholder="ID"
                                                value={this.state.id}
                                                onChange={this.inputChangeHandler}
                                                className="mb-2"
                                            />
                                            <input
                                                type="number"
                                                name="amount"
                                                placeholder="Сумма"
                                                value={this.state.amount}
                                                onChange={this.inputChangeHandler}
                                                className="mb-2"
                                            />
                                            <Button color="primary" onClick={() => this.props.onFetchSendMoney(this.username, this.password, this.state.id, this.state.amount)}>
                                                Перевести ${this.state.amount}
                                            </Button>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="4">
                                    <Row>
                                        <Col sm="12" className="mb-3">
                                            <Form>
                                                <FormGroup>
                                                    <Label for="exampleEmail">Почта</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="volupta07@mail.ru" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="examplePassword">Password</Label>
                                                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="exampleText">Text Area</Label>
                                                    <Input type="textarea" name="text" id="exampleText" />
                                                </FormGroup>
                                                <Button>Submit</Button>
                                            </Form>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        salary: state.lastSalary.salary,
        loading: state.lastSalary.loading,
        sumOfYearSalary: state.sumOfYear.sumOfYearSalary,
        data: state.sendM.data,
        currentMoney: state.currentMoney.money,
        fullName: state.currentMoney.fullName,
        loadingSum: state.sumOfYear.loadingSum
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCurrentMoney:(username, password) => dispatch(fetchCurrentMoney(username, password)),
        onFetchLastSalary: (username, password) => dispatch(fetchLastSalary(username, password)),
        onFetchSumOfYearSalary: (username, password) => dispatch(fetchSumOfYearSalary(username, password)),
        onFetchSendMoney: (username, password, id, amount) => dispatch(fetchSendMoney(username, password, id, amount))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cabinet);


