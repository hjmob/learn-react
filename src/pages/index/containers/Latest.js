/* eslint no-dupe-keys: 0 */
import {ListView} from 'antd-mobile';
import React, {Component} from 'react';
import {connect} from 'dva';
import {FormattedDate} from 'react-intl';
import styles from './Latest.less';
import router from 'umi/router';

// const data = [     {         img:
// 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',         title:
// 'Meet hotel',         des: '不是所有的兼职汪都需要风吹日晒'     }, {         img:
// 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',         title:
// 'McDonald\'s invites you',         des: '不是所有的兼职汪都需要风吹日晒'     }, { img:
// 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png', title: 'Eat
// the week',         des: '不是所有的兼职汪都需要风吹日晒'     } ]; const NUM_ROWS = 20; let
// pageIndex = 0; function genData(pIndex = 0) {     const dataBlob = {}; for
// (let i = 0; i < NUM_ROWS; i++) {         const ii = (pIndex * NUM_ROWS) + i;
//      dataBlob[`${ii}`] = `row - ${ii}`;     }     return dataBlob; }

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
        // you can scroll to the specified position setTimeout(() => this.lv.scrollTo(0,
        // 120), 800); simulate initial Ajax setTimeout(() => {     this.rData =
        // genData();     this.setState({         dataSource: this             .state
        // .dataSource             .cloneWithRows(this.rData), isLoading: false  }); },
        // 600); this._getIndexNews()
    }

    _getIndexNews() {
        this
            .props
            .dispatch({type: 'index/get_lateset'});
    }

    // If you use redux, the data maybe at props, you need use
    // `componentWillReceiveProps` componentWillReceiveProps(nextProps) {   if
    // (nextProps.dataSource !== this.props.dataSource) {     this.setState({
    // dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource), }); }
    // }
    componentWillReceiveProps(nextProps) {
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
        console.log('navigate to',id)
        router.push('/')
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