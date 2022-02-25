import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {}

const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
];

const months = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
]

const Header = (props: Props) => {
    const date = new Date();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {days[date.getDay()]+" "+date.getDate()+" "+ months[date.getMonth()]}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#000"
    }
});

export default Header;