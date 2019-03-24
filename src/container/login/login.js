import React from 'react'
import Logo from '../../component/logo/logo'
import { InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'
import submitForm from '../../component/sumit-form/sumit-form'

/*它真正连接 Redux 和 React ，简单的作用就是然组件获取它所需要的state，而不是所有的state*/
@connect(
    state => state.user,
    {login}
)//使用装饰器方法优化connect
@submitForm
class Login extends React.Component{
    register = () => {
        // console.log(this.props)
        this.props.history.push('/register')
    }
    handleLogin = () => {
        this.props.login(this.props.state)
    }
    render(){
        return (
            <div>
                {this.props.redirectTo&&this.props.redirectTo!=='/login' ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo></Logo>
                <WingBlank>
                        {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
                        <InputItem
                            onChange={v => this.props.handleChange('user', v)}
                        >用户名</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type='password'
                            onChange={v => this.props.handleChange('pwd', v)}
                        >密码</InputItem>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default  Login