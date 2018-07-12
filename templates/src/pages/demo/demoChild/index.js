import React from 'react';
import PropTypes from 'prop-types';
import { AutoWrapper } from '@/components/AutoWrapper';
import model from './model';

const {
  func,
} = PropTypes;

@AutoWrapper({ KOSconfig: { model } })
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
    console.log(this);
    return (
      <div className="header">
        <button onClick={() => this.updateName('哈哈')}>{this.props.name}</button>
        AAAAAAAAAAA1
      </div>
    );
  }
}

export default Index;
