import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F8F9FA',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    maxHeight: height * 0.65,
    paddingHorizontal: 20,
    paddingVertical: 30,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
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

  textHeader: {
    fontSize: 40,
    textAlign: 'center',
    color: '#183B4E',
    fontFamily: 'Lato-Bold',
  },
  textContainer: {
    marginTop: 20,
  },
  textSubtitle: {
    fontSize: 20,
    color: '#183B4E',
    textAlign: 'center',
    fontFamily: 'Lato-Black',
  },
  text: {
    fontSize: 20,
    color: '#183B4E',
    fontFamily: 'Lato-Regular',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    fontFamily: 'Lato-Bold',
  },
});
