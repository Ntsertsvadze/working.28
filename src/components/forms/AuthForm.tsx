import React, { FormEvent, useState } from 'react'
import { IAuth } from '../../interfaces/authinerface'
import { Button, TextField, Typography } from '@mui/material'

interface AuthFromProps {
    type: string
    onSubmit: (formData:IAuth) => void
}

const AuthForm:React.FC <AuthFromProps> = ({type, onSubmit}) => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({email, password})
    setEmail('')
    setPassword('')
   }
  
    return (
        <form onSubmit={handleSubmit} style={{width: '500px', margin: '50px auto', display: 'flex', flexDirection: 'column'}}>
            <Typography>{type === 'login' ? 'login' : 'register'}</Typography>

            <TextField
                label='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant='outlined'
                type='email'
                fullWidth
                required
            />

            <TextField
                label='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant='outlined'
                type='password'
                fullWidth
                required
            />

            <Button type='submit'>
                <Typography>{type === 'login' ? 'login' : 'register'}</Typography>
            </Button>
        </form>
  )
}

export default AuthForm