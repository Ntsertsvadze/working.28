import React from 'react'
import { IAuth } from '../interfaces/authinerface'
import AuthForm from '../components/forms/AuthForm'

const Login:React.FC = () => {
  const onSubmit = (formData: IAuth) => {
    console.log(formData)
  }

  return <AuthForm type='login' onSubmit={onSubmit}/>
}
export default Login