import React from 'react';
import {connect} from 'react-redux';
import {Breadcrumbs} from '../../shared'
import {WingBlank} from 'antd-mobile'
import xml2json from 'xmlstring2json'

const App = ({content})=>{
    // console.log(content);
    let news = {
        newssource:'',
        detail:'',
        newsauthor:'',
    }
    if(content){
        const parsedNews = xml2json(content).rss.channel.item
      news = Object.assign(news,{
        newssource: parsedNews.newssource['#text'],
        detail: parsedNews.detail['#text'].replace(/<img/g, '<img width="100%"'),
        newsauthor: parsedNews.newsauthor['#text']
      })
    }
    return (
        <WingBlank>
            <Breadcrumbs />
            <div className="source">
                {news.newssource}
                <span>{news.newsauthor}</span>
                
            </div>
            <div dangerouslySetInnerHTML={{__html: news.detail}}>
            </div>
        </WingBlank>
    )
}
const mapStateToProps=({detail})=>{
    return {
        content:detail.content
    }
}
export default connect(mapStateToProps)(App);