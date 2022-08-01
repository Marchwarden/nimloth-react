import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text } from '@rneui/themed';
import { TitleText, BalanceText, BalanceNameText } from './styles';
import RingGraph from '@components/RingGraph';



const FriendsScreen = () => {
  const [accountBalance, setAccountBalance] = useState('0.00'); // need to fetch data from BE for this
  return (
    <SafeAreaView>
        <RingGraph></RingGraph>
        <View style ={{alignItems: 'center'}}>
          <TitleText>Wallet</TitleText>
          <BalanceText>${accountBalance}</BalanceText>
          <BalanceNameText>Portfolio</BalanceNameText>
        </View>
    </SafeAreaView>
  );
};

export default FriendsScreen;
