/**
 * Created by Administrator on 2017/3/23.
 */
'use strict';
import React from 'react';
import { Form,Input,Button,Checkbox,message,Modal} from 'antd';
const FormItem = Form.Item;
class Login extends React.Component{
  constructor (props){
    super(props);
    this.state={
      visible:false
    }
  }
  submit(){
  }
  regester(){
    this.setState({
      visible: true,
    })
  }
  handleCancel(){
    this.setState({
      visible: false,
    })
  }
  handleOk(){
    this.setState({
      visible: false,
    })
  }
  render(){
    return (
      <Form className="login">
        <FormItem
          id="userame"
          label="账户："
          labelCol={{span: 6}}
          wrapperCol={{span:14}}
          // validateStatus="error"
          // help="请输入数字和字母组合"
          // hasFeedback
        >
         <Input type="text" placeholder='请输入账户名' id="userName" name="userName"/>
        </FormItem>
        <FormItem
          id="password"
          label="密码："
          labelCol={{span: 6}}
          wrapperCol={{span:14}}
        >
          <Input type="password" placeholder='请输入密码' id="password" name="password"/>
        </FormItem>
        <FormItem className="ant-rember"
        >
          <label className="ml10"
          >
            <Checkbox name="agreement"/> 记住我
          </label>
        </FormItem>
        <Button className="ml20" type="primary" htmlType="submit" onClick={()=>{()=>{this.submit()}}}>登录</Button>
        <div><a onClick={()=>{this.regester()}}>没有账户？注册一个吧</a></div>
        <Modal
          title="注册"
          visible={this.state.visible}
          ref="modal"
          onCancel={()=>{this.handleCancel()}}
          footer={[
            <Button key="back" type="ghost" onClick={()=>{this.handleCancel()}}>返回</Button>,
            <Button key="ok" type="primary" onClick={()=>{this.handleOk()}}>提交</Button>
          ]}
        >
          <p></p>
          <p></p>
          <p></p>
        </Modal>
      </Form>
    )
  }
}
export default Login;
