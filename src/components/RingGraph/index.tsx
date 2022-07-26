import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg'
import { RingDimens } from './styles';

export default function RingGraph({
    radius = 110,
    strokeWidth = 20,
    color = 'purple',

}) {
    const halfCircle = radius + strokeWidth;
    return (
        <View>
            <Svg 
                width = {(radius+strokeWidth)*2}
                height = {(radius+strokeWidth)*2}
                viewBox = {'0 0 ${halfCircle*2} $halfCircle*2}'}>
                <G>
                    <Circle
                     cx = "50%"
                     cy = "50%"
                     stroke = {color}
                     strokeWidth = {strokeWidth}
                     r = {radius}
                     strokeOpacity = {.1}
                     fill = "transparent"
                     />
                    <Circle 
                     cx = "50%"
                     cy = "50%"
                     stroke = {color}
                     strokeWidth = {strokeWidth}
                     r = {radius}
                     strokeOpacity = {1}
                     fill = "transparent"
                     />
                </G>
            </Svg>
        </View>
    )
}