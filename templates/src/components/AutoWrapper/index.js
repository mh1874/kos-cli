import React from 'react';
import KOS from 'kos-core';
import { Switch, Route, withRouter } from 'react-router-dom';

const RouterWrapper = ({ router, parentPath = '' }) => {
  if (!(router instanceof Array)) {
    throw new Error('router config is expected a Array!');
  }
  if (router.length <= 0) {
    return '';
  }
  return (
    <Switch>
      {
        router.map((_) => {
          const { Component, path } = _;
          let childPath = '';
          if (path.indexOf('/') === 0) {
            childPath = path;
          } else {
            childPath = `${parentPath}/${path}`;
          }
          return (<Route
            key={childPath}
            path={childPath}
            render={() => (
              <Component parentPath={childPath} />
            )}
          />);
        })
      }
    </Switch>
  );
};

const AutoWrapper = ({ KOSconfig = {}, router = [] }) =>
  (Component) => {
    const Cp = class extends React.PureComponent {
      render() {
        const { parentPath = '' } = this.props;
        const Rt = (<RouterWrapper router={router} parentPath={parentPath} />);
        // 判断是否使用KOS
        if (KOSconfig.model) {
          const newKOSconfig = {
            namespace: parentPath.split('/').slice(1).join('_'),
            ...KOSconfig,
          };
          const KosWrapper = KOS.Wrapper(newKOSconfig)(Component);
          return (<KosWrapper {...this.props} routers={Rt} />);
        }
        return (<Component {...this.props} routers={Rt} />);
      }
    };
    return withRouter(Cp);
  };

module.exports = {
  AutoWrapper,
};
