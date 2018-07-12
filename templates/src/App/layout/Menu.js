import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Item } = Menu;

const Menus = () => (
  <Menu theme="dark" mode="inline">
    <Item key="demo">
      <Link to="/demo">
        <Icon type="user" />
        <span className="nav-text">demo</span>
      </Link>
    </Item>
    <Item key="demoChild">
      <Link to="/demo/demoChild">
        <Icon type="user" />
        <span className="nav-text">demoChild</span>
      </Link>
    </Item>
  </Menu>
);

Menus.propTypes = {
};

export default Menus;
