import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text } from '@rneui/themed';
import { CustomText } from '../../../../components';
import RingGraph from "../../../../components/RingGraph/index";
import { walletStyles } from './styles';


const FriendsScreen = () => {
  const [accountBalance, setAccountBalance] = useState('0.00'); // need to fetch data from BE for this

  return (
      <SafeAreaView>
        <SafeAreaView>  
          <RingGraph/>
        </SafeAreaView>
      </SafeAreaView>
  );
};

export default FriendsScreen;
