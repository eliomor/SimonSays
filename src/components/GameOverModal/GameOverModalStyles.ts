import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
    top: '50%',
    transform: [{ translateY: -100 }],
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  textInput: {
    width: 200,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 10,
  },
});
