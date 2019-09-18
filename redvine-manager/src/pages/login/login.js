import React from 'react';
import './login.css';
import { Card, Form, Input, Button, message, Icon, Checkbox  } from 'antd';
import axios from 'axios';
import config from '../../constant/config.js';
const FormItem = Form.Item;

class FormLogin extends React.Component {

    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        let self = this;
        axios.post(config.BaseURL + '/rwmportal/tp5/public/loginandregister/registerorlogin/login',{
            name:userInfo.userName,
            password:userInfo.userPwd
        })
        .then(function(response){
            console.log(response)
            if (response.data.code === 200) {
                if (response.data) {
                    self.props.history.push('home');
                }
                
            }
        })
        .catch(function(err){
            console.log(err)
        })



        // this.props.form.validateFields((err,values)=>{
        //     if(!err){
        //         message.success(`${userInfo.userName}欢迎您 ，当前密码为：`)
        //     }
        // })
    }


    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-bg">
                <div className="login-form-contain" >
                    <Card title="后台管理登录" className='login-card'>
                        <Form className='login-form' >
                            <FormItem className='login-form-item'>
                                {
                                    getFieldDecorator('userName',{
                                        initialValue:'',
                                        rules:[
                                            {
                                                required:true,
                                                message:'用户名不能为空'
                                            },
                                            {
                                                min:5,max:10,
                                                message:'长度不在范围内'
                                            },
                                            {
                                                pattern:new RegExp('^\\w+$','g'),
                                                message:'用户名必须为字母或者数字'
                                            }
                                        ]
                                    })(
                                        <Input placeholder="请输入用户名" className="login-form-item-input" size="large"/>
                                    )
                                }
                            </FormItem>
                            <FormItem className='login-form-item'>
                                {
                                    getFieldDecorator('userPwd', {
                                        initialValue: '',
                                        rules: []
                                    })(
                                        <Input type="password" placeholder="请输入密码" className="login-form-item-input" />
                                    )
                                }
                            </FormItem>
                            <FormItem className='login-form-item'>
                                <Button type="primary" onClick={this.handleSubmit}  className="login-form-button">登录</Button>
                            </FormItem>
                        </Form>
                    </Card>
                </div>
            </div>
        );
    }
}
export default Form.create()(FormLogin);
