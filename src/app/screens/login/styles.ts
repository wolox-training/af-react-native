import { StyleSheet } from 'react-native';
import { WHITE, DUSTY_GRAY } from '@constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  inputsContainer: {
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  inputs: {
    backgroundColor: WHITE,
    borderColor: DUSTY_GRAY,
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    marginVertical: 10,
    width: 280,
  },
  button: {
    borderColor: WHITE,
    borderWidth: 2,
    marginVertical: 10
  },
  buttonText: {
    color: WHITE,
    fontWeight: '700'
  }
})

export default styles;
