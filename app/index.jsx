import {NavigationContainer } from "@react-navigation/native";
import App from "../components/App";
import WelcomePage from "../components/WelcomePage"
import {createNativeStackNavigator} from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()


export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={WelcomePage}></Stack.Screen>
        <Stack.Screen name='App' component={App}></Stack.Screen> 
        </Stack.Navigator>

    </NavigationContainer>
    
  );
}