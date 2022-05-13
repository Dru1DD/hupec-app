import React from 'react';
import { Modal as _Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Modal= ({ modalVisible, setModalVisible, addUpdates, update, setUpdate }) => {

  return (
    <View style={styles.centeredView}>
      <_Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <View style={styles.modalText}>
                  <Text style={{ fontSize: 18 }}>New update</Text>
                </View>
                <View style={styles.bottomSheetMain}>
                  <TextInput
                    multiline={true}
                    numberOfLines={12}
                    value={update}
                    onChangeText={setUpdate}
                    onEndEditing={addUpdates}
                    placeholder={"Description"}
                  />
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => addUpdates()}
                >
                  <Text style={styles.colorWhite}>Send</Text>
                </TouchableOpacity>
              </View>
          </View>
      </_Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  bottomSheetMain: {
      width: 150,
      height: 200
  },
  colorWhite: {
      color: 'white'
  }
});

export default Modal;