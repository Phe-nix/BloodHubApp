import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccountScreen from "../screens/auth/CreateAccountScreen";
import ForgetPassword from "../screens/auth/ForgetPassword";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import VerificationScreen from "../screens/auth/VerificationScreen";

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
      <Stack.Screen name="ForgetPassword" component={ForgetPassword}
        options={{
          
        }}
      />

      <Stack.Screen name="VerificationScreen" component={VerificationScreen}
        options={{
          
        }}
      />
    </Stack.Navigator>
  );
}