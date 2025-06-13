import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
  },
  headerSection: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  appTitle: {
    fontSize: 28,
    fontFamily: 'Lato-Bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  subtitleText: {
    fontSize: 18,
    fontFamily: 'Lato-Regular',
    color: '#FFFFFF',
    opacity: 0.9,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  formSection: {
    flex: 0.65,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingHorizontal: 25,
  },
  dividerLine: {
    width: 44,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 15,
  },
  scrollContainer: {
    flex: 1,
  },
  formContainer: {
    paddingBottom: 20,
  },
  loginTitle: {
    fontSize: 26,
    fontFamily: 'Lato-Bold',
    color: '#183B4E',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputSection: {
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: '#6B7280',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    height: 55,
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: '#111827',
    paddingRight: 35,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 15,
  },
  registerButton: {
    backgroundColor: '#183B4E',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
    elevation: 3,
  },
  registerButtonText: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    color: '#FFFFFF',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: '#6B7280',
  },
  loginLink: {
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    color: '#183B4E',
  },
});
