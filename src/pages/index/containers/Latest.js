/* eslint no-dupe-keys: 0 */
import {ListView} from 'antd-mobile';
import React, {Component} from 'react';
import {connect} from 'dva';
import {FormattedDate} from 'react-intl';
import styles from './Latest.less';
import router from 'umi/router';

class Latest extends Component {
    
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
        this.state = {
            dataSource,
            isLoading: true
        };
    }

    componentDidMount() {
        this._getIndexNews()
    }

    _getIndexNews() {
        this
            .props
            .dispatch({type: 'index/get_lateset'});
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.dataSource !== this.props.dataSource) {
            this.setState({
                dataSource: this
                    .state
                    .dataSource
                    .cloneWithRows(nextProps.dataSource),
                isLoading: false
            })
        }
    }

    onEndReached = (event) => {
        // load new data hasMore: from backend data, indicates whether it is the last
        // page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        // this.setState({isLoading: true}); setTimeout(() => {     this.rData = {
        // ...this.rData,         ...genData(++pageIndex)     };     this.setState({
        // dataSource: this             .state             .dataSource
        // .cloneWithRows(this.rData),         isLoading: false     }); }, 1000);
    }

    navigate(id){
        // console.log('navigate to',id)
        router.push(`/details?id=${id}`)
    }

    render() {
        const separator = (sectionID, rowID) => (<div
            key={`${sectionID}-${rowID}`}
            style={{
            backgroundColor: '#F5F5F9',
            height: 8,
            borderTop: '1px solid #ECECED',
            borderBottom: '1px solid #ECECED'
        }}/>);
        const data = this.props.dataSource
        let index = 0;
        const row = (rowData, sectionID, rowID) => {
            console.log(sectionID,rowID)
            if (index > data.length - 1) {
                index = 0;
            }
            const obj = data[index++];
            return (
                
                    <div
                        key={rowID}
                        onClick={this.navigate.bind(this,obj.newsid)}
                        style={{
                        padding: '0 15px'
                    }}>
                        <div
                            style={{
                            display: '-webkit-box',
                            display: 'flex',
                            padding: '10px 0'
                        }}>
                            <img
                                style={{
                                height: '64px',
                                marginRight: '15px'
                            }}
                                src={obj.image}
                                alt=""/>
                            <div
                                style={{
                                lineHeight: 1,
                                flex: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <div
                                    style={{
                                    marginBottom: '8px',
                                    color: '#333'
                                }}>{obj.title}</div>
                                <div className={styles.list_btm}>
                                    <span
                                        style={{
                                        fontSize: '14px',
                                        color: '#FF6E27'
                                    }}>
                                        <FormattedDate
                                            value={obj.postdate}
                                            hour='numeric'
                                            minute='numeric'/>
                                    </span>
                                    <span>{obj.commentcount}评</span>
                                </div>
                            </div>
                        </div>
                    </div>
                
            );
        };
        return (<ListView
            ref={el => this.lv = el}
            dataSource={this.state.dataSource}
            renderFooter={() => (
            <div
                style={{
                padding: 30,
                textAlign: 'center'
            }}>
                {this.state.isLoading
                    ? 'Loading...'
                    : 'Loaded'}
            </div>
        )}
            renderRow={row}
            renderSeparator={separator}
            className="am-list"
            pageSize={4}
            useBodyScroll
            onScroll={() => {
            console.log('scroll');
        }}
            scrollRenderAheadDistance={500}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={10}/>);
    }
}

const mapStateToProps = ({index}) => {
    const {latest_news} = index;
    return {dataSource: latest_news}
}

Latest = connect(mapStateToProps)(Latest)

export default Latest;