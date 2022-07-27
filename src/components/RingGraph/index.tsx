import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg'
import { RingDimens } from './styles';

export default function RingGraph({
    radius = 106,
    strokeWidth = 14,
    color = 'purple',
    
}) {
    const halfCircle = radius + strokeWidth;
    const circleCircumference = 2*Math.PI*radius;
    
    return (
        <SafeAreaView style={{backgroundColor: '#F3F5F6' }}>
            <Svg 
                viewBox = {'0 0 {2*halfCircle} {2*halfCircle}'}
               >
                <G> 
                    <Circle
                     cx = '50%'
                     cy = '25%'
                     stroke = {color}
                     strokeWidth = {strokeWidth}
                     r = {radius}
                     strokeOpacity = {.2}
                     fill = "transparent"
                     />
                    <Circle 
                     cx = '50%'
                     cy = '25%'
                     stroke = {color}
                     strokeWidth = {strokeWidth}
                     r = {radius}
                     strokeOpacity = {1}
                     fill = "transparent"
                     strokeDasharray={circleCircumference}
                     strokeDashoffset={0}
                     />
                </G>
            </Svg>
        </SafeAreaView>
    )
}