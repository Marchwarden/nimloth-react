import { StyleSheet, Text} from 'react-native';
import loadFonts from '../../../../fonts/fonts';
import styled from 'styled-components/native';

export const walletStyles = StyleSheet.create({
    titleStyle: {
        fontSize: 26,
        fontFamily: 'Urbanist-Medium',
        textAlign: 'center',
        elevation: 10,
        top: 51 
    
    },
    balanceStyle: {
        fontSize: 31,
        fontFamily: 'Urbanist-SemiBold',
        textAlign: 'center',
        elevation: 10,
        top: 155   
    },
    balanceTextStyle: {
        fontSize: 17,
        fontFamily: 'Urbanist-Light',
        textAlign: 'center',
        elevation: 10,
        top: 155 
    }
})
