/**
 * Created by Administrator on 2017/3/22.
 */
'use strict';
import React from 'react';
class Header extends React.Component{
  render(){
    return (
      <nav className="header">
        <ul className="nav">
          <li>Ucloud</li>
          <li>ant-design</li>
          <li>d3</li>
          <li>前端技能</li>
          <li>后端需掌握</li>
        </ul>
      </nav>
    )
  }
};
export default Header;
