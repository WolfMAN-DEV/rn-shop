import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import Text from "./Text";
import styles from "../styles";

const Button = ({title, style, textStyle, color = 0, ...props}) => (
    <TouchableOpacity {...props} activeOpacity={0.5}>
        <View style={{...styles.button, ...styles[color === 1 ? 'secondary' : color === 2 ? 'danger' : 'primary'], ...style}}>
            <Text style={{fontFamily: 'raleway-semi-bold',...textStyle}}>{title}</Text>
        </View>
    </TouchableOpacity>
);

export default Button;