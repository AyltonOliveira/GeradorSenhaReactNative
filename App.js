import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'

export default function app(){
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}
