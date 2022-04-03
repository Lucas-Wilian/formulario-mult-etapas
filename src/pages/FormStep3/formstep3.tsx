import * as C from './styles'
import { Theme } from '../../components/Theme/theme'
import { useNavigate, Link } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext/formcontext'
import {  ChangeEvent, useEffect } from 'react'

export const FormStep3 = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()
  
  useEffect(() => {
    if(state.name === ''){
      navigate('/')
    }
    else{
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      })
    }
  },[])

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    })
  }

  const handleNextStep = () => {
    if(state.email !== '' && state.github !== '' ){
      console.log(state)
    }
    else{
      alert('Preencha os dados')
    }

  }
  
  return(
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha o campo abaixo para entramos em contanto</p>
        <hr/>
        <label>
          Qual seu e-mail?
          <input
            type='text'
            autoFocus
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual seu GitHub?
          <input
            type='url'
            autoFocus
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>
        <Link className='backButton' to={'/'}>Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  )
}