import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute, useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';

import BloodScreen from '../screens/Blood/BloodScreen';
import PostScreen from '../screens/Post/PostScreen';
import SettingScreen from '../screens/Settings/SettingScreen';
import { NewNavigation } from './NewNavigation';
import IconBlood from '../../assets/icon/icon_blood.png';
import IconHome from '../../assets/icon/icon_home.png';
import IconNew from '../../assets/icon/icon_news.png';
import IconPost from '../../assets/icon/icon_post.png';
import IconSettings from '../../assets/icon/icon_settings.png';
import { HomeNavigation } from './HomeNavigation';
import NewScreen from '../screens/News/NewScreen';

const Tab = createBottomTabNavigator();

const AppNavigation = ({ route }: any) => {
  const [activeTab, setActiveTab] = React.useState('Home');

  useFocusEffect(
    React.useCallback(() => {
      const currentTab = getFocusedRouteNameFromRoute(route);
      if (currentTab) {
        setActiveTab(currentTab);
      }
    }, [route])
  );

  return (
    <Tab.Navigator
      initialRouteName="Blood"
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#E99999',
        },
        tabBarActiveTintColor: 'orange',
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
        tabBarIcon: ({ focused }) => {
          const tabName = route.name;
          const tintColor = focused ? '#FF6D6E' : '#7B7B7B';
      
          let iconSource;
      
          switch (tabName) {
            case 'Home':
              iconSource = IconHome;
              break;
            case 'Blood':
              iconSource = IconBlood;
              break;
            case 'Post':
              iconSource = IconPost;
              break;
            case 'New':
              iconSource = IconNew;
              break;
            case 'Settings':
              iconSource = IconSettings;
              break;
            default:
              break;
          }
      
          return <Image source={iconSource} style={{ tintColor }} />;
        },
      })}
      
    >
      <Tab.Screen name="Home" component={HomeNavigation} 
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Blood" component={BloodScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="New" component={NewNavigation} 
      options={{
        headerShown: false,
      }}/>
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigation;
