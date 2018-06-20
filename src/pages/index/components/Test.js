import React from 'react'
import {Flex, WhiteSpace, WingBlank} from 'antd-mobile';

const PlaceHolder = ({
    ...restProps
}) => (
    <div className={`placeholder`} {...restProps}>Block</div>
)

export default function Test(props) {
    return (
        <WingBlank>
            <Flex>
                <Flex.Item><PlaceHolder/></Flex.Item>
                <Flex.Item><PlaceHolder/></Flex.Item>
            </Flex>
            <WhiteSpace size="lg"></WhiteSpace>
            <Flex>
                <Flex.Item><PlaceHolder/></Flex.Item>
                <Flex.Item><PlaceHolder/></Flex.Item>
                <Flex.Item><PlaceHolder/></Flex.Item>
                <Flex.Item><PlaceHolder/></Flex.Item>
            </Flex>
            <WingBlank>
                <Flex justify="center">
                    <PlaceHolder className="inline"/>
                    <PlaceHolder className="inline"/>
                    <PlaceHolder className="inline"/>
                </Flex>
            </WingBlank>

        </WingBlank>
    )
}
