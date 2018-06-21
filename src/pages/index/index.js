import {connect} from 'dva';
import ItTab from './components/Tab'
import Banner from './components/Banner'
import {WhiteSpace} from 'antd-mobile';
import Latest from './containers/Latest'

function App(props) {
  return (
    <div>
      <ItTab/>
      <Banner img_data={props.banner}/>
      <WhiteSpace size="lg"/>
      <Latest/>
    </div>
  );
}

export default connect(state => {
  return {pathname: state.routing.location.pathname, text: state.global.text,banner:state.index.banner_data};
})(App);
