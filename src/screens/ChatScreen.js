import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
import ChatComponent from '../common/ChatComponent';

const ChatScreen = () => {
  const [chatList, setChatList] = useState([]);
  const [msg, setMsg] = useState('');
  const inputRef = useRef();
  const onSendMsg = () => {
    let tempList = chatList;
    tempList.push({msg: msg});
    let temp = [];
    tempList.map(item => {
      temp.push(item);
    });
    setChatList(temp);
    inputRef.current.clear()
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={chatList}
        renderItem={({item, index}) => {
          return <ChatComponent item={item} />;
        }}
      />
      <View style={styles.chatView}>
        <TextInput
          ref={inputRef}
          placeholder="Type message here"
          style={styles.input}
          value={msg}
          onChangeText={txt => setMsg(txt)}
        />
        <Text
          style={{
            color: msg == '' ? '#8e8e8e' : '#477BF3',
            fontSize: 16,
            fontWeight: '600',
          }}
          onPress={() => {
            if (msg !== '') {
              onSendMsg();
            }
          }}>
          Send
        </Text>
      </View>
    </View>
  );
};

export default ChatScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatView: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    elevation: 5,
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    width: '90%',
  },
});
