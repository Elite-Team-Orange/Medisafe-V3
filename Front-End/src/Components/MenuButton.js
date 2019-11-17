import React,{Component} from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from "react-navigation-drawer";


export default class MenuButton extends Component {
    render() {
        console.log('props', this.props.id)
        return (
           <Ionicons
                name="md-menu"
                color="black"
                size={32}
                style={styles.menuIcon}
                onPress={()=> this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
                //onPress={()=> this.props.navigation.dispatch(DrawerActions,this.props.id)}

                
           />
           
        )
    }
}


const styles = StyleSheet.create({
    menuIcon: {
        zIndex: 9,
        position: 'absolute',
        top: 10,
        right: 20,
    }
})