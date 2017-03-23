/**
 * Created by Administrator on 2017/3/22.
 */
'use strict';
import React from 'react';
import {Row,Col} from 'antd';
class Header extends React.Component{
  render(){
    return (
      <nav className="header">
        <Row className="nav">
          <Col span="2" offset={2}>Ucloud</Col>
          <Col span="2">ant-design</Col>
          <Col span="2">d3</Col>
          <Col span="2">前端技能</Col>
          <Col span="2">后端需掌握</Col>
        </Row>
      </nav>
    )
  }
};
export default Header;
