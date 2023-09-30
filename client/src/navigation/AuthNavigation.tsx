import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccountScreen from "../screens/auth/CreateAccountScreen";
import CreateNewPassword from "../screens/auth/CreateNewPassword";
import ForgetPassword from "../screens/auth/ForgetPassword";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from '../screens/auth/SignUpScreen';
import VerificationScreen from "../screens/auth/VerificationScreen";

const Stack = createNativeStackNavigator();

export const AuthNaivgation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{
        title: '',
        headerTransparent: true,
      }}
    >
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