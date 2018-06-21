import NavLink from 'umi/navlink';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import styles from './Breadcrumbs.less'

// 更多配置请移步 https://github.com/icd2k3/react-router-breadcrumbs-hoc
const routes = [
  { path: '/', breadcrumb: '首页' },
  { path: '/details', breadcrumb: '详情' },
];

export default withBreadcrumbs(routes)(({ breadcrumbs }) => (
  <div className={styles.bread}>
    {breadcrumbs.map((breadcrumb, index) => (
      <span key={breadcrumb.key} >
        <NavLink to={breadcrumb.props.match.url}>
          {breadcrumb}
        </NavLink>
        {(index < breadcrumbs.length - 1) && <i> / </i>}
      </span>
    ))}
  </div>
));