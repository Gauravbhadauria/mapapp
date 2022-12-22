import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ChatComponent = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.chatView}>
        <Text style={{color: '#fff'}}>{item.msg}</Text>
      </View>
    </View>
  );
};

export default ChatComponent;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  chatView: {
    backgroundColor: 'orange',
    padding: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: 10,
  },
});
