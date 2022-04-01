import * as C from './styles'
import { Theme } from '../../components/theme/theme'
import { useNavigate } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext/formcontext'
import {  useEffect } from 'react'
import { SelectOption } from '../../components/SelectOption/selectopetion'

export const FormStep2 = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()
  
  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    })
  },[])

  const handleNextStep = () => {
    if(state.name !== ''){
      navigate('/step2')
    }
    
    else{
      alert('Preencha os dados.')
    }
  }

  return(
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>
        <hr/>
        <SelectOption
          title = 'Sou Iniciante'
          description = 'Comecei a programar hã menos de 2 anos'
          icon = '🥳'
        />

        <SelectOption
          title = 'Sou Programador'
          description = 'Comecei a programar hã menos de 2 anos ou mais'
          icon = '😎'
        />
        <button onClick={handleNextStep} >Próximo</button>
      </C.Container>
    </Theme>
  )
}