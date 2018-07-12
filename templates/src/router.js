import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import App from '@/App';

const history = createHistory();

// 路由配置
class RouteMap extends React.PureComponent {
  render() {
    return (
      <Router history={history} >
        <Switch>
          <Route path="/" component={App} />
          <Route
            render={() => (<span>404</span>)}
          />
        </Switch>
      </Router>
    );
  }
}

export default RouteMap;
