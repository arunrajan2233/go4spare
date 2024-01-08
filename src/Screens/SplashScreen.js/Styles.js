import { colors } from "../../Assets/General/Colors/Colors";
import { StyleSheet } from "react-native";
import { verticalScale } from "../../Assets/General/Dimension/Dimension";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:colors.defaultOrange
  
    },
    logoImg:{
      width:"80%",
      height:verticalScale(100),
       resizeMode:"contain",
      }
  });