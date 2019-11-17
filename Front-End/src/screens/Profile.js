import React,{Component} from 'react';
// import { createDrawerNavigator, createAppContainer} from 'react-navigation-drawer';
// import MeasurmentScreen from '../screens/Measurment';
import MenuIcon from '../Components/MenuButton';
import { DrawerActions } from "react-navigation-drawer";

import { 
    View,
    Text,
    StyleSheet, 
    AsyncStorage, 
    Image, 
    //Button,
    Alert,
    
} from 'react-native';

// const AppDrawerNavigator = createDrawerNavigator({
//     Measurment: {
//         screen: MeasurmentScreen
//     }
// })

class Profile extends Component {
   
    render() { 
         const { _id, username, email, age, gender}=this.props.navigation.state.params
        return ( 
       
        //          
        //            <View>
        //    
        //                 <Button title="Dates Medication" onPress={()=>this.props.navigation.navigate('Dates',_id) }/>
        //                 <Button title="Measurment" onPress={()=>this.props.navigation.navigate('Measurment',_id) }/>
        //                 <Button title="Notes" onPress={()=>this.props.navigation.navigate('Notes',_id) }/>
        //             </View>
            <View style={styles.container}>
                <MenuIcon navigation={this.props.navigation} id={_id}/>
                <View >
                    <Image  style={styles.imgprofile} source={require('../../assets/doctor.png') } resizeMode="center"/>
                    <Text style={styles.header}>Profile</Text>

                    <View style={styles.itemprofile}>
                        <Text style={styles.sublabelitem}>{username}</Text>
                        <Text style={styles.labelitem}>User Name: </Text>
                        <Image  style={styles.icon} source={require('../../assets/user.png') }/>
                    </View>  

                    <View style={styles.itemprofile}>
                        <Text  style={styles.sublabelitem}>{email}</Text>
                        <Text  style={styles.labelitem}>Email: </Text> 
                        <Image  style={styles.icon} source={require('../../assets/email.png') }/>  
                    </View>  

                    <View style={styles.itemprofile}>
                        <Text  style={styles.sublabelitem}>{gender}</Text>
                        <Text style={styles.labelitem}>Gender: </Text>   
                        <Image  style={styles.icon} source={require('../../assets/stats.png') }/>
                    </View> 

                    <View style={styles.itemprofile}>
                        <Text  style={styles.sublabelitem}>{age}</Text>
                        <Text style={styles.labelitem}>Age: </Text>  
                        <Image  style={styles.icon} source={require('../../assets/-18.png') }/>
                    </View> 
                </View>
            </View>
         );
    }
}
 


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems : 'center',
        justifyContent : 'center'
    },
    header :{
        fontSize: 24,
        fontWeight:'200',
        color: '#2c4f59',
        paddingBottom: 10,
        borderBottomColor : '#199187',
        borderBottomWidth: 1,
        marginVertical: 15,
        alignSelf: "center",

      },
   
    imgprofile:{
        marginTop:15,
        alignSelf: "center",
        height: 110,
        width: 110
    },
   
    icon:{
       width: 30,
       height: 30,
    },
    itemprofile: {
        flex: 1,
        flexDirection: 'row',
        alignSelf:'flex-end'
    },
    labelitem:{
        fontSize: 18,
        color: '#2c4f59',
        marginRight: 13,
        marginLeft:13,
    },
    sublabelitem:{
        fontSize: 16,
        color: '#2c4f59',
    }

})

export default Profile;