import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

// Tasarımdaki ana renk
const PRIMARY_COLOR = '#183B4E';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  // Üst kısım (Resim)
  topContainer: {
    flex: 0.4,
    backgroundColor: '#f0f0f0', // Arka plan resmi yüklenemezse diye
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 130,
  },
  // Alt kısım (İçerik Paneli)
  bottomContainer: {
    flex: 0.6,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  textContainer: {
    alignItems: 'center',
  },
  appName: {
    fontSize: 56,
    fontFamily: 'Lato-Bold',
    color: '#FFFFFF',
  },
  divider: {
    width: 40,
    height: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    marginTop: 15,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Lato-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 24,
  },
  // Butonlar
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  loginButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    width: '48%',
  },
  loginButtonText: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    color: '#FFFFFF',
  },
  registerButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    width: '48%',
    elevation: 3,
  },
  registerButtonText: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    color: PRIMARY_COLOR,
  },
});
