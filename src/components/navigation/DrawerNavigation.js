import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Icon, Header, Footer, Content } from 'native-base'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { items } from './itemsDrawerNavigation';
function Sidebar({ ...props }) {
  return (
    <Container>
      <Header style={{ backgroundColor: '#7ebf83', borderBottomWidth: 0, height: 100 }} androidStatusBarColor="#7EBF83" iosBarStyle="#7EBF83">
        <View style={styles.logoHeader}>
          <Image source={require('../../assets/logos/logo.png')} style={styles.logo} />
        </View>

      </Header>

      <Content>
        <DrawerContentScrollView {...props} >
          <DrawerItemList {...props} />

          {items.map((item) => {
            return (
              <DrawerItem label={item.title} icon={({ color, size }) => (
                <Icon
                  name={item.nameIcon}
                  type={item.typeIcon}
                  solid={true}
                  style={{
                    fontSize: size,
                    color: color,
                    textAlign: "center",
                    width: 30
                  }} />
              )}
                onPress={() =>
                  props.navigation.navigate('Início', {
                    screen: item.screen,
                    params: { url: item.url },
                  })
                } />
            )
          })}
        </DrawerContentScrollView>
      </Content>
      <Footer style={{ backgroundColor: '#ffffff' }}>


        <DrawerContentScrollView>
          <DrawerItem label="Sobre nós"
            onPress={() =>
              props.navigation.navigate('Início', {
                screen: 'About',
              })
            } />

        </DrawerContentScrollView>
      </Footer>
    </Container>
  )
}

const styles = StyleSheet.create({
  logoHeader: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 130,
    height: 57,
    alignItems: "center",
    justifyContent: "center",

  }
})

export default Sidebar;