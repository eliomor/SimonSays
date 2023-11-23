import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
