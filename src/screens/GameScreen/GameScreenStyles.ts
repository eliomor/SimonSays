import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  startButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  turnText: {
    fontSize: 30,
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    color: '#3498db',
    marginBottom: 10,
  },
  centerButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
