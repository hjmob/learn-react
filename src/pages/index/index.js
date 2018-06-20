import Link from 'umi/link';
import {connect} from 'dva';
import {Button} from 'antd-mobile';
import {FormattedDate} from 'react-intl';
import Count from './components/Count';
import styles from './index.css';
import Test from './components/Test'
import ItTab from './components/Tab'
import Banner from './components/Banner'
import {WhiteSpace} from 'antd-mobile';
import Latest from './containers/Latest'

function App(props) {
  return (
    <div>
      {/* <Test />
    <WhiteSpace size="lg" />
      <FormattedDate value={Date.now()} />
      <h2>
        {props.text} @ {props.pathname}
      </h2>
      <Count />
      <br />
      <Button
        accessbilityId="set-title"
        onClick={() => {
          props.dispatch({
            type: 'global/setText',
          });
        }}
      >
        Set Title
      </Button>
      <Button
        onClick={() => {
          props.dispatch({
            type: 'global/throwError',
          });
        }}
      >
        Throw error
      </Button>
      <br />
      <div>
        <Link to="/list">Go to /list</Link>
      </div>
      <div>
        <Link to="/list/list">Go to /list/list</Link>
      </div>
      <div>
        <Link to="/list/search">Go to /list/search</Link>
      </div>
      <div>
        <Link to="/admin">Go to /admin</Link>
      </div> */}
      <ItTab/>
      <Banner/>
      <WhiteSpace size="lg"/>
      <Latest/>
    </div>
  );
}

export default connect(state => {
  return {pathname: state.routing.location.pathname, text: state.global.text};
})(App);
