import { Router } from "./router"
import { FormProvider } from './contexts/FormContext/formcontext'

const App = () => {
  return (
    <FormProvider>
      <Router/> 
    </FormProvider>
  )
}

export default App

