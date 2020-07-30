import { StyleSheet } from 'react-native';
import { WHITE, TUNDORA } from '@constants/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: WHITE,
    borderRadius: 5,
    elevation: 1,
    marginHorizontal: 20,
    marginTop: 15,
    paddingBottom: 20,    
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  container: {
    flexDirection: 'row',
  },
  textContainer: {
    marginHorizontal: 20
  },
  title: {
    color: TUNDORA,
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  subTitle: {
    color: TUNDORA,
    fontSize: 15,
    lineHeight: 18
  },
  img: {
    height: 70,
    width: 50
  },
})

export default styles;
