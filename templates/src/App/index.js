import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import KOS from 'kos-core';
import Pages from '@/pages';
import model from './model';
import styles from './index.less';
import Header from './layout/Header';
import Sider from './layout/Sider';


const {
  Content, Footer,
} = Layout;

@KOS.Wrapper({ model })
class App extends React.PureComponent {
  static propTypes = {
    children: PropTypes.object,
  };

  toggle() {
    const { dispatch } = this.props;
    dispatch({
      type: 'toggleCollapsed',
    });
  }

  render() {
    // console.log(this);
    const { collapsed } = this.props;
    const headerProps = {
      toggle: () => this.toggle(),
      collapsed,
    };
    const siderProps = {
      collapsed,
    };
    return (
      <Layout className={styles.main}>
        <Sider {...siderProps} />
        <Layout>
          <Header {...headerProps} />
          <Content className={styles.content}>
            <div className={styles['content-wrapper']}>
              <Pages />
            </div>
          </Content>
          <Footer className={styles.content}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
