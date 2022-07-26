import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text } from '@rneui/themed';
import { CustomText, LoginBackground } from '../../../../components';
import RingGraph from "../../../../components/RingGraph/index";


const FriendsScreen = () => {
  const [accountBalance, setAccountBalance] = useState('0.00'); // need to fetch data from BE for this

  return (
    <SafeAreaView>
      <RingGraph/>
      <Text style={{ fontSize: 50 }}>$ {accountBalance}</Text>
    </SafeAreaView>
  );
};

export default FriendsScreen;
