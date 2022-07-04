import { View, Text, StyleSheet } from "react-native"

export default function subtitle({children}) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: '#e2b497'
    },
    subtitleContainer: {
        margin: 4,
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    }
})
