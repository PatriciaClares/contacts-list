import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Main from './pages/Main'

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicio" component={Home} />
                <Stack.Screen name="Contatos" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}