import { StyleSheet } from 'react-native';
import { WHITE, TUNDORA } from '@constants/colors';

const styles = StyleSheet.create({
  card: {
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
    marginBottom: 30
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
  }
})

export default styles;
