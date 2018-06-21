import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class VikramApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              -TODO NOTE-
            </Text>
          </View>
          
          <ScrollView style={styles.scrollContainer}>
          </ScrollView>
        </View>
        
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            placeholder='>note'
            placeholderTextColor='black'
            >
          </TextInput>
        </View>
        
        <TouchableOpacity style={styles.add} onPress={this.add}>
          <Icon name='md-add-circle' color='#00ff00' size={61}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'flex-start',
   paddingTop: StatusBar.currentHeight
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 30
  },
  headerText: {
    color: '#EC33FF',
    fontSize: 18,
    paddingTop: StatusBar.currentHeight
  },
  scrollContainer: {
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  textInput: {
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 10,
    alignSelf: 'stretch',
    color: '#000',
    borderTopWidth: 2,
    borderTopColor: '#000'
  },
  add:{
    position: 'absolute',
    bottom: 0,
    right: 20,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#ffffff'
  },
});