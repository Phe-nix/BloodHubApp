import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute, useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';

import BloodScreen from '../screens/Blood/BloodScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import NewScreen from '../screens/News/NewScreen';
import PostScreen from '../screens/Post/PostScreen';
import SettingScreen from '../screens/Settings/SettingScreen';

import IconBlood from '../../assets/icons/icon_blood.png';
import IconHome from '../../assets/icons/icon_home.png';
import IconNew from '../../assets/icons/icon_news.png';
import IconPost from '../../assets/icons/icon_post.png';
import IconSettings from '../../assets/icons/icon_settings.png';

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
      initialRouteName="Post"
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#E99999',
        },
        tabBarActiveTintColor: 'orange',
        tabBarLabelStyle: {
          fontWeight: 'bold', // ปรับ fontWeight ตรงนี้
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Blood" component={BloodScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="New" component={NewScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigation;
