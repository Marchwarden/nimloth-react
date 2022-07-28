import styled from 'styled-components/native';
import Svg, {G, Circle} from 'react-native-svg'
import { StyleSheet, Text } from 'react-native';

  export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    graphWrapper:{
        alignItems: "center",
        justifyContent: "center"
    },
    label: {
      position: "absolute",
      textAlign: "center",
      fontWeight: "700",
      fontSize: 24,
      fontFamily: "Urbanist-SemiBold"
    }
});