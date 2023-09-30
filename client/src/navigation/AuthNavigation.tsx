import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GetStarted } from "../screens";
import CreateAccountScreen from "../screens/Auth/CreateAccountScreen";
import CreateNewPassword from "../screens/Auth/CreateNewPassword";
import ForgetPassword from "../screens/Auth/ForgetPassword";
import SignInScreen from "../screens/Auth/SignInScreen";
import SignUpScreen from '../screens/Auth/SignUpScreen';
import VerificationScreen from "../screens/Auth/VerificationScreen";

const Stack = createNativeStackNavigator();

export const AuthNaivgation = () => {
  return (
    <Stack.Navigator
      initialRouteName="GetStarted"
      screenOptions={{
        title: '',
        headerTransparent: true,
      }}
    > 
      <Stack.Screen name="GetStarted" component={GetStarted}
      />
      <Stack.Screen name="SignIn" component={SignInScreen}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen}
      />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen}
      />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword}
      />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen}
      />
      <Stack.Screen name="CreateNewPassword" component={CreateNewPassword}
      />
    </Stack.Navigator>
  );
}