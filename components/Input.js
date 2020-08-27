import React from 'react';
import {View, TextInput} from 'react-native';

import Text from "./Text";
import styles from "../styles";

const Input = ({input, label, meta: {touched, active, error}}) => {
    return (
        <View>
            <Text size={4}>{label}</Text>
            <TextInput {...input} style={styles.input}/>
            <Text>{touched&&!active? error : ' '}</Text>
        </View>
    );
};

export default Input;