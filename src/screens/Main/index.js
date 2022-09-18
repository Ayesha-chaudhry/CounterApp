import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { React, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Main = () => {
    const [counter, setCounter] = useState(0)
   // const [reset, setReset] = useState(0)
    return (
        <View style={styles.mainContainer}>
            <LinearGradient
                style={styles.box}
                colors={['#89aded', '#76eef5']} 
            />
            <View style={styles.fistContainer}>
                <Text style={styles.fistContainer_txtWrapper}>{counter}</Text>
            </View>
            <View style={styles.secondContainer}>
                <TouchableOpacity
                    onPress={() => { setCounter(0) }}
                    style={{
                        width: 200, height: 200, backgroundColor: "#9600ff", borderRadius: 100, justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={styles.secondContainer_txtWrapper}>Reset</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.thirdContainer}>
                <TouchableOpacity
                    onPress={() => { setCounter(counter + 1) }}
                    style={{
                        width: 200, height: 200, backgroundColor: "#9600ff", borderRadius: 100, justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={styles.secondContainer_txtWrapper}>Count</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    mainContainer: {
        flex: 3,

    },
    fistContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    thirdContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1
    },
    fistContainer_txtWrapper: {
        fontSize: 80,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    secondContainer_txtWrapper: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})