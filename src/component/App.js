import React from 'react';
import {Tabs,Spin,Progress,Icon,Menu,Dropdown,Collapse,Carousel,Alert,TimePicker,message,Button,Row,Col,Input,InputNumber,Radio,Select,Slider,Switch} from 'antd';
import Header from './layout/header';
import Login from './common/login';
import moment from 'moment';
var Panel = Collapse.Panel;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const Option = Select.Option;
const InputGroup = Input.Group;
const TabPane = Tabs.TabPane

const App = React.createClass({
    getInitialState() {
        return {
            date: '',
            loading: false
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
    render() {
      var  text = `
          A dog is a type of domesticated animal.
          Known for its loyalty and faithfulness,
          it can be found as a welcome guest in many households across the world.
        `;
      var menu=(<Menu>
          <Menu.Item key="0">
              <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
          </Menu.Item>
          <Menu.Item key="1">
              <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3" disabled>3d menu item（disabled）</Menu.Item>
      </Menu>);
        return <div>
            <Header/>
            <div className="container">
                <div className="left-layout">left</div>
                <div className="content">center
                    <div style={{marginTop: 20}}>当前日期：{this.state.date.toString()}</div>
                    <span>按钮</span>
                    <Button type="primary" className="m10">primary</Button>
                    <Button type="ghost" className="m10">ghost</Button>
                    <Button className="m10">default</Button>
                    <Row>
                        <InputGroup>
                            <Col span="6">
                                <Input id="largeInput" size="large" placeholder="大尺寸" />
                            </Col>
                            <Col span="6">
                                <Input id="defaultInput" placeholder="默认尺寸" />
                            </Col>
                            <Col span="6">
                                <Input id="smallInput" placeholder="小尺寸" size="small" />
                            </Col>
                        </InputGroup>
                    </Row>
                    <InputNumber max={11} min={3}/>
                    <InputNumber defaultValue="123456" disabled/>
                    <RadioGroup className="m10">
                        <Radio value="a">A</Radio>
                        <Radio value="b">B</Radio>
                        <Radio value="c">C</Radio>
                        <Radio value="d">D</Radio>
                    </RadioGroup>
                    <RadioGroup className="m10">
                        <RadioButton value="a">A</RadioButton>
                        <RadioButton value="b">B</RadioButton>
                        <RadioButton value="c">C</RadioButton>
                        <RadioButton value="d">D</RadioButton>
                    </RadioGroup>
                    <Select showSearch  searchPlaceholder="输入" defaultValue="A" style={{width:120}}>
                        <Option value="A">A</Option>
                        <Option value="B" disabled>B</Option>
                        <Option value="C">C</Option>
                        <Option value="D">D</Option>
                    </Select>
                    <Select  multiple defaultValue="A" style={{width:120}}>
                        <Option value="A">A</Option>
                        <Option value="B" disabled>B</Option>
                        <Option value="C">C</Option>
                        <Option value="D">D</Option>
                    </Select>
                    <div>
                        <Slider defaultValue={30} tipFormatter={(val)=>this.formatter(val)}/>
                        <Slider defaultValue={[20,60]} range/>
                        <Slider defaultValue={[20,60]} range disabled/>
                    </div>
                    <div>
                        <Switch defaultValue="false" checkedChildren="开" unCheckedChildren="关"/>
                    </div>
                    <div className="m10">
                        <TimePicker/>
                        <TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />
                        <TimePicker format="HH:mm" minuteOptions={[0, 30]} />
                    </div>
                    <Alert message="成功" showIcon  type="success"/>
                    <Alert
                      closable
                      showIcon
                      message="成功"
                      type="success"
                      description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍"
                    />
                    <Carousel className="carousel" dots autoplay>
                        <div><h1>1</h1></div>
                        <div><h1>2</h1></div>
                        <div><h1>3</h1></div>
                        <div><h1>4</h1></div>
                    </Carousel>
                    <Carousel autoplay>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                    <Collapse defaultActiveKey={['1']} className="collapse" accordion>
                        <Panel header="this is panel header1" key="1" >
                            <p>{text}</p>
                        </Panel>
                        <Panel header="this is panel header2" key="2">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="this is panel header3" key="3">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                    <Dropdown overlay={menu} trigger={["click"]}>
                        <Button onClick={()=>{this.clickMessage()}}>按钮
                            <Icon type="down" />
                        </Button>
                    </Dropdown>
                    <div>
                        <Progress percent={30}/>
                        <Progress percent={50} status="active"/>
                        <Progress percent={50} strokeWidth={2} showInfo={false}/>
                        <Progress percent={40} status="exception"/>
                        <Progress percent={100} type="circle"/>
                    </div>
                    <div className="example">
                        <Spin>
                            <Alert
                              message="Alert message title"
                              description="Further details about the context of this alert."
                              type="info"
                            />
                        </Spin>
                    </div>
                    <div>
                        <Spin size="small" />
                        <br />
                        <Spin />
                        <br />
                        <Spin size="large" />
                    </div>
                    <Tabs defaultActiveKey="1">
                        <TabPane key="1" tab="选项卡一">ssss</TabPane>
                        <TabPane key="2" tab="选项卡二">选项卡二</TabPane>
                        <TabPane key="3" tab="选项卡三">选项卡三</TabPane>
                        <TabPane tab="选项四" key="4">选项卡四</TabPane>
                        <TabPane tab="选项五" key="5">选项卡五</TabPane>
                        <TabPane tab="选项六" key="6">选项卡六</TabPane>
                        <TabPane tab="选项七" key="7">选项卡七</TabPane>
                        <TabPane tab="选项八" key="8">选项卡八</TabPane>
                        <TabPane tab="选项九" key="9">选项卡九</TabPane>
                    </Tabs>
                </div>
                <div className="right-layout">
                    <Login/>
                </div>
            </div>
        </div>;
    }
});

export default App;