import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  loginCard: {
    backgroundColor: 'white',
    minHeight: height * 0.6,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#ddd',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: -10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#183B4E',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Lato-Bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Lato-Regular',
  },
  closeButton: {
    backgroundColor: '#2c5f5d',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Lato-Bold',
  },
  background: {
    flex: 1,
    width: width,
    height: height,
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    alignSelf: 'center',
    marginTop: height * 0.1,
  },
});
