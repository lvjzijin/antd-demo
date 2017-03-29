import React from 'react';
import AntDesign from './antd/antd-demo';
import D3 from './d3Demo/d3';
import {message,Row,Col} from 'antd';

const App = React.createClass({
    getInitialState() {
        return {
            date: '',
            loading: false,
            activeIndex: 0
        };
    },
    handleChange(value) {
        message.info('您选择的日期是: ' + value.toString());
        this.setState({
            date: value
        });
    },
    formatter(value){
        return '$'+value;
    },
    clickMessage(){
    message.success('成功啊',2)
    },
    handleMenuClick(){

    },
    selectIndex(index){
      this.setState({
        activeIndex : index
      })
    },
    render() {
      var activeIndex = this.state.activeIndex;
      var content;
      switch(activeIndex){
        case 0:
          content = <AntDesign/>;
          break;
        case 1:
          content = <AntDesign/>;
          break;
        case 2:
          content = <D3 />;
          break;
        default:
          content = <AntDesign/>;
          break;
      }
      return (
        <div>
          <nav className="header">
            <Row className="nav">
              <Col span="2" offset={2}><a onClick={()=>{this.selectIndex(0)}}>Ucloud</a></Col>
              <Col span="2"><a onClick={()=>{this.selectIndex(1)}}>ant-design</a></Col>
              <Col span="2"><a onClick={()=>{this.selectIndex(2)}}>d3</a></Col>
              <Col span="2">前端技能</Col>
              <Col span="2">后端需掌握</Col>
            </Row>
          </nav>
          <div className="container">
            {content}
          </div>
      </div>);
    }
});

export default App;