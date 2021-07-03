import React, { useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Image, AppRegistry } from 'react-native';
import {
  NavigationContainer
} from '@react-navigation/native';
import './src/config/StatusBarConfig'
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconNotifcations from 'react-native-vector-icons/Ionicons';
import messaging from '@react-native-firebase/messaging'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppearanceProvider} from 'react-native-appearance';
import Sidebar from './src/components/navigation/DrawerNavigation'
import HomeScreen from './src/screens/home/homeScreen'
import WebViewScreen from './src/screens/postsWebview/postsWebviewScreen'
import LibraryWebviewScreen from './src/screens/library/LibraryWebview'
import NotificationScreen from './src/screens/notification/notificationScreen'
import LibraryScreen from './src/screens/library/libraryScreen'
import SearchScreen from './src/screens/search/searchScreen'
import getRealm from './src/services/realm'
import { fcmService } from './src/services/notification/FCMService'
import { localNotificationService } from './src/services/notification/LocalNotificationService'
import { SafeAreaView } from 'react-native-safe-area-context';
import NoItem from './src/components/noItem/feed'
import PageScreen from './src/screens/page/pageScreen'
import AboutScreen from './src/screens/about/aboutScreen'
import AboutAppScreen from './src/screens/about/aboutAppScreen'
import AssignmentScreen from './src/screens/assignment/assignmentScreen'
import {useInitialRender} from './src/lib/useInitialRender';

AppRegistry.registerHeadlessTask('RNFirebaseBackgroundNotificationAction', actionHandler);

const actionHandler = () => message => {
  console.log(message)
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 90, height: 40 }}
      source={require('./src/assets/logos/logo.png')}
    />
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root({ navigation }) {
  return (
   
    <Stack.Navigator headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {elevation:0, shadowOpacity:0, borderBottomWidth:0, backgroundColor:"#7EBF83"},
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleAlign: "center"

      }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="bars" style={styles.IconLeft} />
          </TouchableOpacity>
        ),

        headerRight: () => (
          <SafeAreaView style={styles.Right}>
            <View >
              <TouchableOpacity onPress={() => navigation.navigate('Início', { screen: 'Search' })}>
                <IconNotifcations name="search" style={styles.IconRight} />
              </TouchableOpacity>
            </View>

            <View >
              <TouchableOpacity onPress={() => navigation.navigate('Início', { screen: 'Notification' })}>
                <IconNotifcations name="notifications-sharp" style={styles.IconRight} />
              </TouchableOpacity>
            </View>

          </SafeAreaView>

        )
      
      
      }} />

      <Stack.Screen name="WebView" component={WebViewScreen} />
      <Stack.Screen name="LibraryWebview" component={LibraryWebviewScreen} />
      <Stack.Screen name="Notification" options={{ headerTitle: "Notificações" }} component={NotificationScreen} />
      <Stack.Screen name="Library" options={{ headerTitle: "Bibliotecas" }} component={LibraryScreen} />
      <Stack.Screen name="Search" options={{ headerTitle: "Pesquisa" }} component={SearchScreen} />
      <Stack.Screen name="NoItem" options={{ headerShown: false }} component={NoItem} />
      <Stack.Screen name="PageScreen" component={PageScreen} />
      <Stack.Screen name="About" options={{ headerTitle: "Sobre nós" }} component={AboutScreen} />
      <Stack.Screen name="AboutApp" options={{ headerTitle: "Sobre o aplicativo" }}  component={AboutAppScreen} />
      <Stack.Screen name="Assignment" options={{ headerTitle: "Atribuições" }}  component={AssignmentScreen} />

    </Stack.Navigator>
  );
}

export default function App({ navigation }) {
  useEffect(() => {
    fcmService.registerAppWithFCM()
    fcmService.register(onRegister, onNotification, onOpenNotification)
    localNotificationService.configure(onOpenNotification)

    function onRegister(token) {
      console.log("[App] onRegister: ", token)
    }

    function onNotification(notify) {
      console.log("[App] onNotification: ", notify)
      const options = {
        soundName: 'default',
        playSound: true,
        largeIcon: 'notification_icon', 
        smallIcon: 'notification_icon' 
      }
      localNotificationService.showNotification(
        0,
        notify.title,
        notify.body,
        notify,
        options
      )

      messaging().setBackgroundMessageHandler(async remoteMessage => {

        if(remoteMessage.from != '/topics/topic'){
          await saveNotificationDataBase(remoteMessage)
        }
      });
    }

    async function saveNotificationDataBase(remoteMessage) {
      const data = {
        id: remoteMessage.sentTime,
        title: remoteMessage.notification.title,
        description: remoteMessage.notification.body,
        date: remoteMessage.sentTime
      }

      const realm = await getRealm()
      const existingData = realm.objects('Notification')

      if (existingData.length < 5) {
        realm.write(() => {
          realm.create('Notification', data)
        })

      } else {
        realm.write(() => {
          realm.delete(existingData[0])
          realm.create('Notification', data)
        })
      }     
    }


    function onOpenNotification(notify) {
      console.log("[App] onOpenNotification: ", notify.title)
    }

    return () => {
      console.log("[App] unRegister")
      fcmService.unRegister()
      localNotificationService.unregister()
    }

  }, [])


  return (
    <AppearanceProvider >
      <NavigationContainer  >
        <Drawer.Navigator initialRouteName="Início"
          screenOptions={{ gestureEnabled: false,}}
          drawerStyle={{width:useInitialRender ? null: "72%" }}
          drawerContentOptions={{ activeBackgroundColor: "#ddd", activeTintColor: "#656565" }}
          drawerContent={props => <Sidebar {...props} />}
        >

          <Drawer.Screen name="Início" component={Root}
            options={{
              drawerIcon: ({ focused, color, size }) => (
                <Icon name="home" style={{ fontSize: size, textAlign: "center", width: 30, color: color }} />
              )
            }} />
        </Drawer.Navigator>
      </NavigationContainer>

    </AppearanceProvider>

  );
}

const styles = StyleSheet.create({

  IconLeft: {
    fontSize: 30,
    padding: 17,
    textAlign: 'center',
    color: "#ffffff"
  },

  IconRight: {
    fontSize: 30,
    padding: 4,
    marginRight:8,
    textAlign: 'center',
    color: "#ffffff"
  },

  Right: {
    flexDirection:"row",
    width: 100,
    padding: 5,
    marginRight:2
  }
})
