import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ChatDialog = ({modalVisible, setModalVisible, data, onClickChat}) => {
  console.log(data);
  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.modalView}>
        <View style={styles.modalMain}>
          <Image source={data.image} style={styles.userImage} />
          <Text style={styles.name}>{data.name}</Text>
          <Text
            style={[
              styles.name,
              {
                fontSize: 16,
                marginLeft: 20,
                marginRight: 20,
                fontWeight: '500',
              },
            ]}>
            {'Hey my name is ' + data.name + '.' + 'wanna chat with me ?'}
          </Text>
          <View style={styles.bottomView}>
            <TouchableOpacity
              style={[styles.btn, {backgroundColor: 'gray'}]}
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, {backgroundColor: 'orange'}]}
              onPress={() => {
                setModalVisible(false);
                onClickChat();
              }}>
              <Text style={styles.btnText}>Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ChatDialog;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalMain: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
  },
  userImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 10,
  },
  bottomView: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 20,
  },
  btn: {
    width: '40%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
  },
});
