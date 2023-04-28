import React, { ChangeEvent, useEffect, useState } from 'react'
import './Login.css'
import { Box, Typography, Button, Grid, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import UsuarioLogin from '../../models/UsuarioLogin'
import { login } from '../../service/Service'
import useLocalStorage from 'react-use-localstorage'
import { useDispatch } from 'react-redux'
import { addToken } from '../../store/tokens/action';

function Login() {

  
  const history = useNavigate()
  const dispatch = useDispatch()

  const [token, setToken] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  
  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
    token: ''
  })

  
  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value
    })
  }

  
  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      setIsLoading(true)
      await login('/usuarios/logar', userLogin, setToken)
      alert('Usuario logado com sucesso')

    } catch(error) {
      setIsLoading(false)
      console.log(error);
      alert('Usuário ou senha inválidos')
    }
  }

  
  useEffect(() => {
    if(token !== '') {
      dispatch(addToken(token))
      history('/home')
    }
  }, [token])

  return (
    <>
      <Grid container alignItems={'center'}>
        <Grid item xs={6} justifyContent='center' >
          <Box display='flex' justifyContent={'center'} >
            <Grid item xs={6} >
              <form onSubmit={onSubmit}>
                <Typography variant='h3' align='center' gutterBottom fontWeight='bold'>Entrar</Typography>
                <TextField
                  variant='outlined'
                  name='usuario'
                  value={userLogin.usuario}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                  label='Usuário'
                  margin='normal'
                  fullWidth />

                <TextField
                  type='password'
                  name='senha'
                  error={userLogin.senha.length < 8 && userLogin.senha.length > 0}
                  helperText={userLogin.senha.length < 8 && userLogin.senha.length > 0 ? 'Senha incorreta' : ''}
                  value={userLogin.senha}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                  variant='outlined'
                  label='Senha'
                  margin='normal'
                  fullWidth />
                <Box marginY={2}>
                  
                    <Button disabled={isLoading} type='submit' size='large' variant='contained' fullWidth>
                      {isLoading ? (<span className="loaderLogin"></span>) : ('Logar')}
                      </Button>
                  
                </Box>
            </form>
            <hr />
            <Typography marginTop={2} align='center' variant="body1">Ainda não tem uma conta? <Link to='/cadastrarUsuario' className='linkLogin'>Cadastre-se aqui</Link></Typography>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6} className='imagemLogin'></Grid>
      </Grid>
    </>
  )
}

export default Login