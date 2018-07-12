import React from 'react';
import PropTypes from 'prop-types';
import { AutoWrapper } from '@/components/AutoWrapper';
import model from './model';
import router from './router';


const {
  func,
} = PropTypes;

@AutoWrapper({ KOSconfig: { model }, router })
class Index extends React.Component {
  static propTypes = {
    dispatch: func,
  };

  updateName(name) {
    this.props.dispatch({
      type: 'updateState',
      payload: {
        name,
      },
    });
  }

  render() {
    return (
      <div className="header">
        <button onClick={() => this.updateName('哈哈')}>{this.props.name}</button>
        AAAAAAAAAAA
        <div>
          {this.props.routers}
        </div>
      </div>
    );
  }
}

export default Index;
