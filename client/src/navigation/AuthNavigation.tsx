import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen, SignUpScreen } from "../screens";
import { CreateAccountScreen } from "../screens/auth/CreateAccountScreen";

const Stack = createNativeStackNavigator();

export const AuthNaivgation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen}
        options={{
          
        }}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen}
        options={{

        }}
      />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen}
        options={{
          
        }}
      />
    </Stack.Navigator>
  );
}