import { StyleSheet } from 'react-native';
import { WHITE, TRANSPARENT, TURQUOISE } from '@constants/colors';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: TRANSPARENT,
    borderColor: TURQUOISE,
    borderRadius: 100,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
  },
  fillButton: {
    backgroundColor: TURQUOISE
  },
  buttonText: {
    color: TURQUOISE,
    fontSize: 15,
    fontWeight: '900',
    lineHeight: 19,
    textTransform: 'uppercase',
  },
  fillButtonText: {
    color: WHITE,
  }
});

export default styles;
