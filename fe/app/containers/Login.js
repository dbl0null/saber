import React from 'react';
import { browserHistory } from 'react-router'
import history from 'react-router/lib/browserHistory';
import connect from 'react-redux/lib/components/connect';
import autobind from 'core-decorators/lib/autobind';
import {STATUS_REQUEST, STATUS_SUCCESS, cleanToken, setToken} from '../middleware/fetch';
import * as UserAction from '../actions/user';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;


@connect(
    state => ({loginResult: state.login}),
    {login: UserAction.login}
)
export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mail: '', password: ''};
        cleanToken()
    }

    @autobind
    handleSubmit() {
        this.props.login(this.state.mail, this.state.password);
    }

    componentWillReceiveProps(props) {
        if (props.loginResult.id !== this.props.loginResult.id) {
            if (props.loginResult.status === STATUS_SUCCESS) {
                const token = props.loginResult.res.token;
                setToken(token);
                browserHistory.push('/index');
            }
        }
        this.props = props;
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <div className="tile">
                    Archer
                </div>
                <Form onSubmit={this.handleSubmit} className="login-form" style={{width: '20%'}}>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input addonBefore={<Icon type="user"/>} placeholder="Username"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input addonBefore={<Icon type="lock"/>} type="password" placeholder="Password"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot">Forgot password</a>
                        <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                            Log in
                        </Button>
                        Or <a>register now!</a>
                    </FormItem>
                </Form>
            </div>
        );
    }
}






