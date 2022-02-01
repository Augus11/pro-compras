import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import LoginScreen from "LoginScreen"
import ChatScreen from "LoginScreen"

const AppNavigator = createStackNavigator (
    {
        Login: LoginScreen,
        Chat: ChatScreen,
    },
    {
        hederMode: "none"
    }
);

export default createAppContainer(AppNavigator);