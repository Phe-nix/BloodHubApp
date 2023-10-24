import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute, useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';

import BloodScreen from '../screens/blood/BloodScreen';
import PostScreen from '../screens/post/PostScreen';
import IconBlood from '../../assets/icon/icon_blood.png';
import IconHome from '../../assets/icon/icon_home.png';
import IconNew from '../../assets/icon/icon_news.png';
import IconPost from '../../assets/icon/icon_post.png';
import IconSettings from '../../assets/icon/icon_settings.png';

import { NewNavigation } from './NewNavigation';
import { HomeNavigation } from './HomeNavigation';
import { SettingNavigation } from './SettingNavigation';


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
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#E99999',
          borderBottomWidth: 5,
        },
        tabBarActiveTintColor: 'orange',
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
          marginBottom: -10,
        },
        headerBackgroundContainerStyle: {
          borderBottomWidth: 5,
          borderBottomColor: '#D9D9D9',
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
      
          return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={iconSource} style={{ tintColor }} />
            </View>
          );
        },
      })}
      
    >
      <Tab.Screen name="Home" component={HomeNavigation} 
        options={{
          title: 'โฮมเพจ',
          headerShown: false,
        }}
      />
      <Tab.Screen name="Blood" component={BloodScreen}
        options={{
          title: 'คลังเลือด'
        }}
      />
      <Tab.Screen name="Post" component={PostScreen}
        options={{
          title: 'โพสต์',
        }}
      />
      <Tab.Screen name="New" component={NewNavigation} 
        options={{
          title: 'ข่าวสาร',
          headerShown: false,
        }}
      />
      <Tab.Screen name="Settings" component={SettingNavigation} 
        options={{
          title: 'ตั้งค่า',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
