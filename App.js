/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Animated} from 'react-native';
import FCM, {FCMEvent} from "react-native-fcm";
const img= require("./src/image/bg.jpg");


type Props = {};
 class App extends Component<Props> {

  // constructor(props) {
  //   super(props);
  //   this.refreshTokenListener = null;
  // }

  componentDidMount() {

    console.log('##test1');

    console.log('##test2'+JSON.stringify(FCMEvent));

    try{

      FCM.on(FCMEvent.RefreshToken, token => {
        console.log('##test3'+token);
      });

    }catch(e){
      console.error('##error '+JSON.stringify(e));
    }

   /* FCM.requestPermissions(); 
    FCM.getFCMToken().then(token => { // Here you get the fcm token
        let tokenData: FirebaseToken = {
            firebaseToken: token
        };
        storeFireBaseToken(tokenData).then((done: any) => {
            console.log('##1=>'+done);
        });
        // store fcm token in your server
    });
    FCM.getInitialNotification().then((notif: any) => {
        // for android/ios app killed state
        if (notif) {
            // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload 
        }
    });

    this.notificationListener = FCM.on(FCMEvent.Notification, async (notif: any) => {
        // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
        if (notif.opened_from_tray) {
            // handling when app in foreground or background state for both ios and android

        }
    });
    this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, (token) => {
        console.log('##2=>'+token);
        // fcm token may not be available on first load, catch it here
    });*/

  }

  

  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>

        <View style={{ height:'100%', backgroundColor: 'powderblue'}} >

          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={img} style={{width: 70, height: 60}} />

          </View>
        </View>

      </View>

    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius:5,
    borderWidth:5,
    borderColor:'#ddd',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#0f0',
  },
  instructions: {
    textAlign: 'center',
    color: '#f00',
    marginBottom: 5,
  },
});
