import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: { 
    height: 110, 
    position: 'relative', 
    alignItems: 'center', 
    flexDirection: 'row' 
  },
  arrow: {
    height: 20, 
    marginHorizontal: 12, 
    width: 20
  },
  title: {
    fontSize: 17, 
    textTransform: "uppercase", 
    color: "white", 
    fontWeight: "700", 
    lineHeight: 20
  },
  backgroundImage: { 
    zIndex: -1, 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    resizeMode: 'cover' 
  }
});

export default styles;