import React from 'react'
import Logo from '../../component/logo/logo'
import {InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'
import submitForm from '../../component/sumit-form/sumit-form'

@connect(
    state => state.user,
    {register}
)
@submitForm
class Register extends React.Component{
    componentDidMount(){
        this.props.handleChange('type', 'genius')
    }
    handleRegister = () => {
        this.props.register(this.props.state)
        //this.props.register(this.state) 没有使用submitForm之前是这样提交的
        // console.log(this.state)
        // console.log(this.props)
    }
    render(){
        const RadioItem = Radio.RadioItem
        return (
            <div>
                {this.props.redirectTo&&this.props.redirectTo!=='/login' ? <Redirect to={this.props.redirectTo}/> : null}
                {/*{this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}*/}
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
                    <InputItem
                        type='password' 
                        onChange={v => this.props.handleChange('repeatpwd', v)}
                    >确认密码</InputItem>
                    <WhiteSpace />
                    <RadioItem 
                        checked={this.props.state.type === 'genius'}
                        onChange={() => this.props.handleChange('type', 'genius')}
                    >
                        牛人
                    </RadioItem>
                    <WhiteSpace />
                    <RadioItem 
                        checked={this.props.state.type === 'boss'}
                        onChange={() => this.props.handleChange('type', 'boss')}
                    >
                        Boss
                    </RadioItem>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default  Register