/**
 * @format
 */
import React, { useState, useEffect } from 'react'

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import getRealm from './src/services/realm'
import NetInfo from "@react-native-community/netinfo";
import NoInternet from "./src/components/noItem/internet"

messaging().setBackgroundMessageHandler(async remoteMessage => {

  if(remoteMessage.from != '/topics/topic'){
    await saveNotificationDataBase(remoteMessage)
  }

  
});

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

function checkNetwork() {


  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isInternetReachable === false) {
        setIsConnected(false);
      } else {
        setIsConnected(true);
      }
    });

    return () => unsubscribe();
  }, []);

}

function HeadlessCheck({ isHeadless }) {

  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    let isMounted = true; // note this flag denote mount status
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isInternetReachable === false) {
        setIsConnected(false);
      } else {
        setIsConnected(true);
      }
    });

    return () => unsubscribe();
  }, []);

  if (isHeadless) {
    return null;
  }


  if (isConnected) {
    return <App />
  } else {
    return (
        <NoInternet />
    )
  }

}

AppRegistry.registerComponent(appName, () => HeadlessCheck);

