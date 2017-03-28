import React from 'react';
import {Tabs,Steps,Spin,Progress,Icon,Menu,Dropdown,Collapse,Carousel,Alert,
  TimePicker,message,Button,Row,Col,Input,InputNumber,Radio,Select,Slider,Switch} from 'antd';
import Header from './layout/header';
import Login from './common/login';
import moment from 'moment';
var Panel = Collapse.Panel;
var Step = Steps.Step;
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
    handleMenuClick(){

    },
    render() {
      var  text = `
          A dog is a type of domesticated animal.
          Known for its loyalty and faithfulness,
          it can be found as a welcome guest in many households across the world.
        `;
        const items = (
          <Menu onClick={this.handleMenuClick()}>
              <Menu.Item key="1">1st item</Menu.Item>
              <Menu.Item key="2">2nd item</Menu.Item>
              <Menu.Item key="3">3rd item</Menu.Item>
          </Menu>
        );
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
      var steps=[{
        title: '已完成',
        description: '这里是多信息的描述啊'
      }, {
        title: '进行中',
        description: '这里是多信息的耶哦耶哦哦耶哦耶'
      }, {
        title: '又一个待运行',
        description: '描述啊描述啊'
      }, {
        title: '待运行',
        description: '这里是多信息的描述啊'
      }]
      var contentSteps = steps.map((item,index)=>{
          return <Step key={index} title={item.title} description={item.description}/>
      })
        return <div>
            <Header/>
            <div className="container">
                <div className="left-layout">
                    <div className="m10">
                        <div className="font-large">简介</div>
                        <span>Ant Design </span>
                        <span>是一个致力于提升『用户』和『设计者』使用体验的中台设计语言。它模糊了产品
                            经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色边界，将进行 UE 设计和 UI
                            设计人员统称为『设计者』，利用统一的规范进行设计赋能，全面提高中台产品体验和研发效率。</span>
                    </div>
                </div>
                <div className="content">
                    {/*<div style={{marginTop: 20}}>当前日期：{this.state.date.toString()}</div>*/}
                    <div className="font-general"><a href="https://ant.design/components/button-cn/">按钮</a></div>
                    <Button type="primary" className="m10">primary</Button>
                    <Button type="ghost" className="m10">ghost</Button>
                    <Button className="m10">default</Button>
                    <Button type="primary" icon="search" className="m10">Search</Button>
                    <Button type="dashed" className="m10">Dashed</Button>
                    <Button type="danger" className="m10">Danger</Button>
                    <div className="m10">
                        <Dropdown overlay={items}>
                            <Button>
                                more <Icon type="down" />
                            </Button>
                        </Dropdown>
                    </div>
                    <div className="m10">
                        <div className="font-general"><a>Input输入框</a></div>
                        <Row className="m10">
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
                                <Col span="6">
                                    <Input addonBefore="Http://" addonAfter=".com" defaultValue="website" />
                                </Col>
                            </InputGroup>
                        </Row>
                    </div>
                    <InputNumber max={11} min={3}/>
                    <InputNumber defaultValue="123456" disabled className="ml10"/>
                    <div className="m10">
                        <div className="font-general"><a>选择框</a></div>
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
                    </div>
                    <div className="m10 font-general">
                        <div><a>Slider滑动输入条</a></div>
                        <Slider defaultValue={30} tipFormatter={(val)=>this.formatter(val)}/>
                        <Slider defaultValue={[20,60]} range/>
                        <Slider defaultValue={[20,60]} range disabled/>
                    </div>
                    <div>
                        <Switch defaultValue="false" checkedChildren="开" unCheckedChildren="关"/>
                    </div>
                    <div className="m10 font-general">
                        <div><a>时间选择器</a></div>
                        <TimePicker/>
                        <TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />
                        <TimePicker format="HH:mm" minuteOptions={[0, 30]} />
                    </div>
                    <div className = "m10 font-general">
                        <div><a>提示</a></div>
                        <Alert message="成功" showIcon  type="success"/>
                        <Alert
                          closable
                          showIcon
                          message="成功"
                          type="success"
                          description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍"
                        />
                    </div>
                    <div className = "m10 font-general">
                        <div><a>Carousel走马灯</a></div>
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
                    </div>
                    <Dropdown overlay={menu} trigger={["click"]}>
                        <Button onClick={()=>{this.clickMessage()}}>按钮
                            <Icon type="down" />
                        </Button>
                    </Dropdown>
                    <div className = "m10 font-general">
                        <div><a>Progress 进度条</a></div>
                        <Progress percent={30}/>
                        <Progress percent={50} status="active"/>
                        <Progress percent={50} strokeWidth={2} showInfo={false}/>
                        <Progress percent={40} status="exception"/>
                        <Progress percent={100} type="circle"/>
                    </div>
                    <div className=" m10 font-general">
                        <div><a>Spin加载中</a></div>
                        <div className="example">
                            <Spin>
                                <Alert
                                  message="Alert message title"
                                  description="Further details about the context of this alert."
                                  type="info"
                                />
                            </Spin>
                        </div>
                    </div>
                    <div>
                        <Spin size="small" />
                        <br />
                        <Spin />
                        <br />
                        <Spin size="large" />
                    </div>
                    <div className="m10">
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
                    <div className="m10 font-general">
                        <div><a>Step步骤条</a></div>
                        <Steps current={1}>{contentSteps}</Steps>
                        <Steps direction="vertical" current={1}>
                            <Step title="Finished" description="This is a description." />
                            <Step title="In Progress" description="This is a description." />
                            <Step title="Waiting" description="This is a description." />
                        </Steps>
                    </div>

                </div>
                <div className="right-layout">
                    <Login/>
                </div>
            </div>
        </div>;
    }
});

export default App;