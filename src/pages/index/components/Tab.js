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
    title: '最新'
  }, {
    title: '排行榜'
  }, {
    title: '上热评'
  }, {
    title: '测评室'
  }, {
    title: '发布会'
  }, {
    title: '专题'
  }, {
    title: '阳台'
  }
];

const ItTab = () => (
  <div>

    <StickyContainer>
      <Tabs tabs={tabs} initalPage={'t2'} renderTabBar={renderTabBar}></Tabs>
    </StickyContainer>

  </div>
);

export default ItTab;