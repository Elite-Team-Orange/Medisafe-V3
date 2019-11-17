import React,{Component} from 'react';
import { 
        View,
        Text, 
        StyleSheet, 
        TextInput,
        ScrollView,
        Button,
        FlatList,
        Image,
        AsyncStorage 
    } from 'react-native';

import axios from "axios";


export default class Notes extends Component {
    state={
        id:"",
        description: null,
        notes: []
    }

    componentDidMount = async () => {
        this.setState({id: await AsyncStorage.getItem('_id') })

        axios
    .post("http://10.60.95.169:2000/shownotes", this.state)
    .then(({ data }) => {
      // console.log('dataNoteeeee', data.note)
      this.setState({
        notes: data.note
      });
    })
    .catch(error => {
      console.log(error);
    });
    }

    addNote = () => {
        axios
          .post("http://10.60.95.169:2000/notes", this.state)
          .then(({ data }) => {
            // console.log('dataNoteeeee', data.note)
            this.setState({
              notes: data.note
            });
          })
          .catch(error => {
            console.log(error);
          });
      };
    
    render() {
    //     return (
    //     // <View style={styles.screen}>
    //     //     <Text>Notes screen </Text>
    //     //     <Text>{this.state.id}</Text>
    //     // </View>
    //     )
    // }
    console.log("notess",this.state.notes);
    return (
      <View style={styles.screen}>
        {/* <View style={styles.header}>
          <Text style={styles.headerText}>Notes screen</Text>
          <Text>{this.state.id}</Text>
        </View> */}
        <View style={styles.imageIcon}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("../../assets/note.png")}
          />
        </View>

        <View style={styles.inputButton}>
          <TextInput
            style={styles.inputBox}
            onChangeText={description => this.setState({ description })}
            placeholder="note"
          />
        </View>

        <View style={styles.buttonAdd}>
          <Button title="Add" onPress={this.addNote} />
        </View>

        <View>
          <FlatList
            data={this.state.notes}
            renderItem={({ item }) => {
              return (
                <ScrollView>
                    <View style={styles.card}>
                        <Text>{item.description}</Text>
                        <Text style={styles.dateCard}>{item.date}</Text>
                    </View>
                </ScrollView>
              );
            }}
            keyExtractor={item => item._id}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#e5e5e5",
        height: "100%"
      },
      header: {
        backgroundColor: "#E91E63",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 10,
        borderBottomColor: "#ddd"
      },
      headerText: {
        color: "white",
        fontSize: 18,
        padding: 26
      },
      scrollContainer: {
        flex: 1,
        marginBottom: 100
      },
      footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
      },
      textInput: {
        alignSelf: "stretch",
        color: "#fff",
        padding: 20,
        backgroundColor: "#252525",
        borderTopWidth: 2,
        borderTopColor: "#ededed"
      },
      addButton: {
        position: "absolute",
        zIndex: 10,
        right: 20,
        bottom: 90,
        backgroundColor: "#E91E63",
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        elevation: 8
      },
      addButtonText: {},
      buttonAdd: {
        position: "absolute",
        bottom: 0,
        // justifyContent: 'center',
        // alignItems: 'center',
        width: "100%",
        flex: 1
      },
      inputBox: {
        width: 300,
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#000000",
        marginVertical: 10
      },
      inputButton: {
        flexDirection: "row",
        justifyContent: "space-around"
      },
      card: {
        flexDirection: "row",
        justifyContent: "flex-start",
        // alignItems: "center",
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: "rgb(255, 255, 255)",
        width: 350,
        height: 60,
        padding: 10
      },
      dateCard: {
        position: "absolute",
        bottom: 5,
        right: 5,
        fontSize: 10,
        color: "#565656"
      },
      imageIcon: {
        alignItems: "center"
      },
})