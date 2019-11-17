import React,{Component} from 'react';
import { StyleSheet } from 'react-native';
import Path from './src/Components/path';
import Navigator from './src/navigation/MedNavigation';

export default class App extends Component {

  render(){
    const localhost= Path.yasmin;
    console.log(localhost);
    return (    
      <Navigator/>
    );
  }
  
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });