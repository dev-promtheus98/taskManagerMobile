import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
    title: string,
    counter: number
}

const CounterTile = ({title, counter}: Props) => {
  return (
    <View>
        <Text style={styles.counterText}>{counter}</Text>
        <Text style={styles.titleText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    counterText:{
        color: '#000',
        fontWeight: "bold"
    },
    titleText:{
        color: '#000',
        fontWeight: "300"
    },
});

export default CounterTile