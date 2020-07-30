import { StyleSheet } from 'react-native';
import { WHITE, TUNDORA, TURQUOISE } from '@constants/colors';

const styles = StyleSheet.create({
  card: {
    flex: 1
  },
  container: {
    flexDirection: 'row',
    marginBottom: 20
  },
  content: {
    justifyContent: 'space-between',
    marginLeft: 20,
    maxWidth: 140,
  },
  img: {
    height: 105,
    width: 69
  },
  title: {
    color: TUNDORA,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 25,
  },
  subTitle: {
    color: TUNDORA,
    fontSize: 15,
    lineHeight: 18
  },
  button: {
    borderWidth: 0,
    marginBottom: 0,
    height: 10,
    justifyContent: 'flex-end'
  },
  buttonRent: {
    alignItems: 'center',
    backgroundColor: TURQUOISE,
    borderColor: TURQUOISE,
    borderRadius: 100,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
  },
  buttonText: {
    color: WHITE,
    fontSize: 15,
    fontWeight: '900',
    lineHeight: 19,
    textTransform: 'uppercase',
  },
})

export default styles;
