import messaging from '@react-native-firebase/messaging'
import { Platform } from 'react-native';
import getRealm from '../realm'

class FCMService {

    state = {
        items: []
    };

    register = (onRegister, onNotification, onOpenNotification) => {
        this.checkPermission(onRegister)
        this.createNotificationListeners(onRegister, onNotification, onOpenNotification)
    }

    registerAppWithFCM = async () => {
        if (Platform.OS === 'ios') {
            await messaging().registerDeviceForRemoteMessages();
            await messaging().setAutoInitEnabled(true)
        }
    }

    checkPermission = (onRegister) => {
        messaging().hasPermission()
            .then(enabled => {
                if (enabled) {
                    // User has permissions
                    this.getToken(onRegister)
                } else {
                    // User doesn't have permission
                    this.requestPermission(onRegister)
                }
            }).catch(error => {
                console.log("[FCMService] Permission rejected ", error)
            })
    }

    getToken = (onRegister) => {
        messaging().getToken().then(fcmToken => {
            if (fcmToken) {
                messaging().subscribeToTopic('topic')

                onRegister(fcmToken)
            } else {
                console.log("[FCMService] User does not have a device token")
            }
        }).catch(error => {
            console.log("[FCMService] getToken rejected ", error)
        })

    }

    requestPermission = (onRegister) => {
        messaging().requestPermission().then(() => {
            this.getToken(onRegister)
        }).catch(error => {
            console.log("[FCMService] Request Permission rejected ", error)
        })
    }

    deleteToken = () => {
        console.log("[FCMService] deleteToken ")
        messaging().deleteToken().catch(error => {
            console.log("[FCMService] Delete token error ", error)
        })
    }

    saveNotificationDataBase = async (remoteMessage) => {

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


    createNotificationListeners = (onRegister, onNotification, onOpenNotification) => {

        // When the application is running, but in the background
        messaging()
            .onNotificationOpenedApp(remoteMessage => {

                if (remoteMessage) {
                    const notification = remoteMessage.notification
                    onOpenNotification(notification)
                }
            });

        // When the application is opened from a quit state.
        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                console.log('[FCMService] com app fechado', remoteMessage);

                if (remoteMessage) {
                    const notification = remoteMessage.notification
                    onOpenNotification(notification)
                }
            });

        messaging().setBackgroundMessageHandler(function (payload) {
            console.log('[firebase-messaging-sw.js] Received background message ', payload);
            // Customize notification here

        });

        // Foreground state messages
        this.messageListener = messaging().onMessage(async remoteMessage => {
            if (remoteMessage.from != '/topics/topic') {
                await this.saveNotificationDataBase(remoteMessage)
            }

            if (remoteMessage) {

                let notification = null
                if (Platform.OS === 'ios') {
                    notification = remoteMessage.data.notification
                } else {
                    notification = remoteMessage.notification
                }
                onNotification(notification)
            }
        });

        // Triggered when have new token
        messaging().onTokenRefresh(fcmToken => {
            console.log("[FCMService] New token refresh: ", fcmToken)
            onRegister(fcmToken)
        })

    }

    unRegister = () => {
        this.messageListener()
    }
}

export const fcmService = new FCMService()