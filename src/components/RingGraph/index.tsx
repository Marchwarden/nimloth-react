
import React from "react";
import {SafeAreaView, View, Text} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import {styles} from './styles'
import Svg, { G, Circle } from "react-native-svg";

const RingGraph = () => {

const radius = 70;
const circleCircumference = 2*Math.PI*radius;
//Need to fix how data is added here
const BTC = 1000;
const ETH = 800;
const SOL = 300;
const total = BTC+ETH+SOL;

const BTCPercentage = (BTC/total)*100;
const ETHPercentage = (ETH/total)*100;
const SOLPercentage = (SOL/total)*100;

const BTCStrokeDashoffset =
    circleCircumference - (circleCircumference * BTCPercentage) / 100;
  const ETHStrokeDashoffset =
    circleCircumference - (circleCircumference * ETHPercentage) / 100;
  const SOLStrokeDashoffset =
    circleCircumference - (circleCircumference * SOLPercentage) / 100;

const BTCAngle = (BTC/total)*360;
const ETHAngle = (ETH/total)*360;
const SOLAngle = (SOL/total)*360;

return (
    <View style = {styles.container}>
        <View style = {styles.graphWrapper}>
            <Svg height="160" width="160" viewBox="0 0 180 180">
                <G rotation={-90} originX="90" originY={"90"}>
                { total === 0 ? (
              <Circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke="#F1F6F9"
                fill="transparent"
                strokeWidth="40"
              />
             ) : (
               <>
                 <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#F05454"
                  fill="transparent"
                  strokeWidth="40"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={BTCStrokeDashoffset}
                  rotation={0}
                  originX="90"
                  originY="90"
                  strokeLinecap="round"
                 />
                 <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#30475E"
                  fill="transparent"
                  strokeWidth="40"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={ETHStrokeDashoffset}
                  rotation={BTCAngle}
                  originX="90"
                  originY="90"
                  strokeLinecap="round"
                 />
                  <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#222831"
                  fill="transparent"
                  strokeWidth="40"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={SOLStrokeDashoffset}
                  rotation={ETHAngle}
                  originX="90"
                  originY="90"
                  strokeLinecap="round"
                />
                 </>
                  )
                  }
                </G>
            </Svg>
        <Text style={styles.label}>{total}€</Text>
        </View>
    </View>
        );
};
export default RingGraph;