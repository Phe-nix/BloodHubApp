import { RouteProp } from "@react-navigation/core";

export type RootParamsList = {
    GetStarted: undefined
    SignUp: undefined
    SignIn: undefined
}

export type GetStarted = RouteProp<RootParamsList, 'GetStarted'>;
export type SignUp = RouteProp<RootParamsList, 'SignUp'>;
export type SignIn = RouteProp<RootParamsList, 'SignIn'>;
