import React from 'react';
import {List} from 'antd-mobile';
import ListItem from '../components/ListItem';
import {WhiteSpace} from 'antd-mobile';

const Latest = (props) => {
    return (
        <List>
            <ListItem/>
            <WhiteSpace size="lg"/>
            <ListItem/>
            <WhiteSpace size="lg"/>
            <ListItem/>
        </List>
    )
}

export default Latest;