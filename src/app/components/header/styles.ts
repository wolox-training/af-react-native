import { StyleSheet } from 'react-native';
import { IMAGE_SIZE } from '@constants/sizes';

const styles = StyleSheet.create({
  header: { 
    height: 110, 
    alignItems: 'center', 
    flexDirection: 'row',
    paddingBottom: 15,
    justifyContent: 'space-between'
  },
  button: {
    flexDirection: 'row'
  },
  buttonRight: {
    flexDirection: 'row-reverse',
  },
  arrow: {
    height: IMAGE_SIZE, 
    marginHorizontal: 12, 
    width: IMAGE_SIZE,
  },
  title: {
    fontSize: 17, 
    textTransform: "uppercase", 
    color: "white", 
    fontWeight: "700", 
    lineHeight: 20,
  },
});

export default styles;