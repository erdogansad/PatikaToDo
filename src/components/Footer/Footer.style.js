import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 0,
    paddingBottom: 15,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#37474f',
    gap: 15,
  },
  input: {
    paddingHorizontal: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 16,
    color: '#fefefd',
  },
  button: {
    paddingVertical: 10,
    marginHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fefefd',
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    marginHorizontal: 25,
    borderRadius: 8,
    elevation: 3,
  },
});
