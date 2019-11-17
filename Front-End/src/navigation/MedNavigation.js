import { createAppContainer} from 'react-navigation';
import { createStackNavigator,StackNavigator } from 'react-navigation-stack'
import React,{Component} from 'react';

import StartingPageScreen from '../screens/StartingPage';
import DatesMedicationScreen from '../screens/DatesMedication';
import ProfileScreen from '../screens/Profile';
import LoginScreen from '../screens/Login';
import MeasurmentScreen from '../screens/Measurment';
import NotesScreen from '../screens/Notes';
import RegisterScreen from '../screens/Register';

import { Platform, Dimensions} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';  
const WIDTH = Dimensions.get('window').width;



const navigator = createStackNavigator(
{

    StartingPage:StartingPageScreen,
    Login: LoginScreen,
    DatesMedication: DatesMedicationScreen,
    Profile: ProfileScreen,
    
    Measurment: MeasurmentScreen,
    Notes: NotesScreen,
    Register: RegisterScreen
});

const Drawer = createDrawerNavigator({
  navigator,
  Measurment: {
      screen : MeasurmentScreen
  },
  DatesMedication: {
      screen : DatesMedicationScreen
  },
  Notes: {
      screen : NotesScreen
  },
  // DrawerConfig
});
const AppContainer = createAppContainer(Drawer);
export default AppContainer;
// export default createAppContainer(navigator);



/* 
    StartingPage:{
        screen: StartingPageScreen 
        // screen:  (props)=> <StartingPageScreen />
        // screen: StartingPageScreen
     },
  export default class MedNavigation extends Component {
    constructor(props) {
      super(props)
    }

    render() {
        const {A}=this.props

        const MainCart = createStackNavigator({
            StartingPage:{
                screen: StartingPageScreen
             }
          });
          const AppContainer = createAppContainer(MainCart);
        
    // console.log('Nav: ',this.props)
    //   return <AppContainer Y={this.props.AAA}/>;
      return <AppContainer p={A}/>;
    }
  }
  */