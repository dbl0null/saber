import React from 'react';
import marked from 'marked';
import history from 'react-router/lib/browserHistory';
import connect from 'react-redux/lib/components/connect';
import autobind from 'core-decorators/lib/autobind';
import {STATUS_REQUEST, STATUS_SUCCESS} from '../middleware/fetch';
import * as PostAction from '../actions/post';
import {Menu, Breadcrumb, Icon} from 'antd';

@connect(
    state => ({post: state.post}),
    {create: PostAction.create}
)
export default class AsideCollapse extends React.Component {
    constructor(props) {
        super(props);
        // this.props.create(1);
        // this.state = {code: ''}
        this.state = {collapse: true}
    }

    @autobind
    onCollapseChange() {
        this.setState({
            collapse: !this.state.collapse,
        })
    }

    render() {
        const collapse = this.state.collapse;
        return (
            <div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
                <aside className="ant-layout-sider">
                    <div className="ant-layout-logo"></div>
                    <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
                        <Menu.Item key="user">
                            <Icon type="user"/><span className="nav-text">导航一</span>
                        </Menu.Item>
                        <Menu.Item key="setting">
                            <Icon type="setting"/><span className="nav-text">导航二</span>
                        </Menu.Item>
                        <Menu.Item key="laptop">
                            <Icon type="laptop"/><span className="nav-text">导航三</span>
                        </Menu.Item>
                        <Menu.Item key="notification">
                            <Icon type="notification"/><span className="nav-text">导航四</span>
                        </Menu.Item>
                        <Menu.Item key="folder">
                            <Icon type="folder"/><span className="nav-text">导航五</span>
                        </Menu.Item>
                    </Menu>
                    <div className="ant-aside-action" onClick={this.onCollapseChange}>
                        {collapse ? <Icon type="right"/> : <Icon type="left"/>}
                    </div>
                </aside>
                <div className="ant-layout-main">
                    <div className="ant-layout-header"></div>
                    <div className="ant-layout-breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>应用列表</Breadcrumb.Item>
                            <Breadcrumb.Item>某应用</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="ant-layout-container">
                        <div className="ant-layout-content">
                            <div style={{height: 220}}>
                                内容区域
                            </div>
                        </div>
                    </div>
                    <div className="ant-layout-footer">
                        Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
                    </div>
                </div>
            </div>
        );
    }
}
