import {Tabs} from 'antd-mobile';
import {StickyContainer, Sticky} from 'react-sticky';

function renderTabBar(props) {
  return (
    <Sticky>
      {({style}) => <div style={{
        ...style,
        zIndex: 1
      }}><Tabs.DefaultTabBar {...props}/></div>}
    </Sticky>
  );
}
const tabs = [
  {
    title: '最新',
    tab_name:'Latest'
  }, {
    title: '排行榜',
    tab_name:'Rank'

  }, {
    title: '上热评',
    tab_name:'Rank'
  }, {
    title: '测评室',
    tab_name:'Rank'
  }, {
    title: '发布会',
    tab_name:'Rank'
  }, {
    title: '专题',
    tab_name:'Rank'
  }, {
    title: '阳台',
    tab_name:'Rank'
  }
];

const ItTab = (props) =>{
  function changeTab(tab,idx) {
    props.onTabChange({
      tab,idx
    })
  }
  return  (
    <div>
  
      <StickyContainer>
        <Tabs tabs={tabs} initalPage={'t2'} renderTabBar={renderTabBar} onTabClick={(tab,index)=>changeTab(tab,index)}></Tabs>
      </StickyContainer>
  
    </div>
  );
}

export default ItTab;