import React, { Component } from 'react';
import Dishdetail from './DishDetailComponent';
import { View, Platform } from 'react-native';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {DISHES} from '../shared/dishes';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Home from './HomeComponent';
import {Icon} from 'react-native-elements';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
},
{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
}
);

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff"  
    })
});

const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact}
    }, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTitleStyle: {
                color: "#fff"
            },
            headerTintColor: "#fff"
        }
    });

    const AboutNavigator = createStackNavigator({
        About: { screen: About}
        }, {
            navigationOptions: {
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTitleStyle: {
                    color: "#fff"
                },
                headerTintColor: "#fff"
            }
        });

const MainNavigator = createDrawerNavigator({
    Home: 
      { screen: HomeNavigator,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home'
        }
      },
      About:
      {
          screen: AboutNavigator,
          navigationOptions: {
              title: 'About',
              drawerLabel: 'About Us'
          }
      },
    Menu: 
      { screen: MenuNavigator,
        navigationOptions: {
          title: 'Menu',
          drawerLabel: 'Menu'
        }, 
      },
    Contact:
      {
          screen: ContactNavigator,
          navigationOptions: {
              title: 'Contact Us',
              drawerLabel: 'Contact Us'
          }
      }
}, {
  drawerBackgroundColor: '#D1C4E9'
});

class Main extends Component {
    constructor(props){
        super(props);
        this.state ={
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dishId) {
        this.setState({selectedDish: dishId})
    }

    render() {
        return (
            <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MainNavigator />
            </View>
        );
    }
}

export default Main;