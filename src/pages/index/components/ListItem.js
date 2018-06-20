import React from 'react'
import {List} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

const ListItem = (porps) => {
    return (
        <Item
        extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
            Title
            <Brief>subtitle</Brief>
        </Item>
    )

}

export default ListItem;
