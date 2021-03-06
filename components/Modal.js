import React from 'react';
import { Alert, Modal as _Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const Modal= ({ modalVisible, setModalVisible, errorText }) => {

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
            <Text style={styles.modalText}>{errorText}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Хорошо</Text>
            </Pressable>
          </View>
        </View>
      </_Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    padding: 16,
},
bottomSheetTitle: {
    padding: 5,
},
bottomSheetMain: {
    padding: 5
},
bottomSheetButton: {
    height: 35,
    width: '95%',
    margin: 15,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'grey',
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center'
},
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
});

export default Modal;