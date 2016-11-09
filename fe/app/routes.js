import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';
import LoginForm from './containers/Login';
import AsideCollapse from './containers/Editor';
import {Form} from 'antd';
import '../static/AsideCollapse.css';
import 'antd/dist/antd.css';

export const Login = Form.create({})(LoginForm);
export const Editor = Form.create({})(AsideCollapse);

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            {/*<IndexRoute component={Login}/>*/}
            <Route path="login" component={Login}/>
            <Route path="index" component={Editor}/>
        </Route>
    </Router>
);

export default routes;
