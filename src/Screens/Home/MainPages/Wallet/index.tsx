import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text } from '@rneui/themed';
import { walletStyles } from './styles';
import RingGraph from '@components/RingGraph';



const FriendsScreen = () => {
  const [accountBalance, setAccountBalance] = useState('0.00'); // need to fetch data from BE for this
  return (
    <SafeAreaView>
        <RingGraph></RingGraph>
          <Text style = {walletStyles.titleStyle}>Wallet</Text>
          <Text style = {walletStyles.balanceStyle}>${accountBalance}</Text>
          <Text style = {walletStyles.balanceTextStyle}>Portfolio</Text>
    </SafeAreaView>
  );
};

export default FriendsScreen;
