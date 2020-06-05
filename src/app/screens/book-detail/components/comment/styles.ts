import { StyleSheet } from 'react-native';
import { TUNDORA } from '@constants/colors';

const styles = StyleSheet.create({
  comment: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 30
  },
  image: {
    borderRadius: 150,
    height: 45,
    width: 45,
  },
  containerText: {
    width: '100%',
    paddingHorizontal: 20
  },
  name: {
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  text: {
    color: TUNDORA,
    fontSize: 15,
    fontWeight: '300',
    lineHeight: 18
  }
});

export default styles;
