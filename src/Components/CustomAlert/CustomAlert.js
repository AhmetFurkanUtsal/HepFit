import React from 'react';
import {View, Text, TouchableOpacity, Modal, BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './CustomAlert.style';

// --- Alt Bileşenler (Sub-components) ---
const AlertIcon = ({type}) => {
  const getIconProps = () => {
    switch (type) {
      case 'success':
        return {name: 'check', color: '#FFFFFF'};
      case 'warning':
        return {name: 'alert', color: '#FFFFFF'};
      case 'error':
        return {name: 'close', color: '#FFFFFF'};
      case 'info':
        return {name: 'information', color: '#FFFFFF'};
      default:
        return {name: 'check', color: '#FFFFFF'};
    }
  };

  const iconProps = getIconProps();

  return (
    <View style={styles.iconContainer}>
      <Icon name={iconProps.name} size={40} color={iconProps.color} />
    </View>
  );
};

const AlertButton = ({title, onPress, type = 'primary'}) => {
  const buttonStyle =
    type === 'primary' ? styles.primaryButton : styles.secondaryButton;
  const textStyle =
    type === 'primary' ? styles.primaryButtonText : styles.secondaryButtonText;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

// --- Ana Custom Alert Bileşeni ---
const CustomAlert = ({
  visible,
  title,
  message,
  type = 'success',
  buttons = [],
  onDismiss,
}) => {
  // Android geri tuşu için
  React.useEffect(() => {
    const backAction = () => {
      if (visible && onDismiss) {
        onDismiss();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [visible, onDismiss]);

  if (!visible) return null;

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onDismiss}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onDismiss}>
        <TouchableOpacity
          style={styles.alertCard}
          activeOpacity={1}
          onPress={() => {}}>
          <AlertIcon type={type} />

          <Text style={styles.alertTitle}>{title}</Text>

          {message && <Text style={styles.alertMessage}>{message}</Text>}

          <View style={styles.buttonsContainer}>
            {buttons.length === 1 ? (
              <TouchableOpacity
                style={styles.singleButton}
                onPress={buttons[0].onPress}>
                <Text style={styles.primaryButtonText}>{buttons[0].title}</Text>
              </TouchableOpacity>
            ) : (
              buttons.map((button, index) => (
                <AlertButton
                  key={index}
                  title={button.title}
                  onPress={button.onPress}
                  type={button.type || (index === 0 ? 'primary' : 'secondary')}
                />
              ))
            )}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomAlert;
