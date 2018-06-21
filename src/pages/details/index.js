import React from 'react';
import {connect} from 'react-redux';
import {Breadcrumbs} from '../../shared'
import {WingBlank} from 'antd-mobile'

const App = ()=>{
    return (
        <WingBlank>
            <Breadcrumbs />
            详情
        </WingBlank>
    )
}

export default connect()(App);