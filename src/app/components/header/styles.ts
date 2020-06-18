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
  backgroundImage: { 
    bottom: 0, 
    flex: 1,
    justifyContent: "center",
    left: 0, 
    position: 'absolute', 
    resizeMode: 'cover' ,
    right: 0, 
    top: 0, 
    zIndex: -1, 
  }
});

export default styles;