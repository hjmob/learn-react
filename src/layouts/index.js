import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import { IntlProvider } from 'react-intl';
import { NavBar, Icon } from 'antd-mobile';
import styles from './index.less'
import Link from 'umi/link';

function mapStateToProps(state) {
  return {
    text: state.global.text,
  };
}

const top_link = [{stylename:'lp_logo',link:'/',text:'辣品'},{stylename:'qz_logo',link:'/list',text:'圈子'},]

export default withRouter(
  connect(mapStateToProps)(props => {
    return (
      <IntlProvider locale="en">
        <div>
        <NavBar
         mode="light"
         leftContent={<img src="//img.ithome.com/m/images/index/logo.svg" className={styles.logo} />}
         onLeftClick={() => console.log('onLeftClick')}
        //  rightContent={[
        //   <Link to="/" key="">
        //     <span className={styles.lp_logo}>辣品</span>
        //   </Link>,
        //   <Link to="/list"><span className={styles.qz_logo}>圈子</span></Link>,
        //  ]}
         rightContent={
           top_link.map((item,idx)=>(<Link to={item.link} key={idx}  ><span className={styles[item.stylename]}></span>{item.text}</Link>))
         }
       > </NavBar>
         
          {props.children}
        </div>
      </IntlProvider>
    );
  }),
);
