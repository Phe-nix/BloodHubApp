import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute, useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';

import BloodScreen from '../screens/blood/BloodScreen';
import HomeScreen from '../screens/home/HomeScreen';
import NewScreen from '../screens/news/NewScreen';
import SettingScreen from '../screens/Settings/SettingScreen';

import IconBlood from '../../assets/icons/icon_blood.png';
import IconHome from '../../assets/icons/icon_home.png';
import IconNew from '../../assets/icons/icon_news.png';
import IconPost from '../../assets/icons/icon_post.png';
import IconSettings from '../../assets/icons/icon_settings.png';
import PostDetailScreen from '../screens/post/PostDetailScreen';

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
      initialRouteName="PostNav"
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
          borderBottomWidth: 5, // เพิ่ม underline ด้านล่างของ Header
          borderBottomColor: '#D9D9D9', // สีของ underline
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
            case 'PostNav':
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
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          title: 'โฮมเพจ'
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
      <Tab.Screen name="New" component={NewScreen} 
        options={{
          title: 'ข่าวสาร'
        }}
      />
      <Tab.Screen name="Settings" component={SettingScreen} 
        options={{
          title: 'ตั้งค่า'
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
