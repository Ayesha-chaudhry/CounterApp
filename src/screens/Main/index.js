import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { React, useState, useEffect } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { v4 as uuid } from 'uuid';
import AnimatedLottieView from 'lottie-react-native';
import { BACKGROUND_IMG, SAVE_BTN } from '../../../res/drawables'
import { COLOR_NAVY_BLUE, COLOR_WHITE } from '../../../res/strings';

const Main = (props) => {
    const [counter, setCounter] = useState(0)
    const [date, setDateTime] = useState('');
    const [selectedItem, setSelectedItem] = useState()

    const Id = uuid().slice(0, 8).toString()
    // const res = JSON.stringify(object)

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();
    const [items, setItems] = useState([
        { label: 'الللہ اکبر', value: 'Allah' },
        { label: 'سبحان الللہ', value: 'SubhanAllah' },
        { label: 'قل شریف', value: 'QullSharif' },
        { label: 'الحمد لللہ', value: 'AlhamduLillah' },
    ]);

    const retData = {
        date: date,
        selectedItem: selectedItem,
        counter: counter  //counter : 13    
    }

    const res = JSON.stringify(retData)

    const storeData = async () => {
        try {
            await AsyncStorage.setItem(Id, res)
            //Todo await AsyncStorage.setItem(title,description)
            console.log("Enter into data")
        } catch (e) {
            alert('data no saved')
        }
    }


    useEffect(() => {
        var curr_Date = new Date().getDate()
        var curr_month = new Date().getMonth() + 1
        var curr_year = new Date().getFullYear()
        var hr = new Date().getHours() % 12
        var min = new Date().getMinutes()
        var sec = new Date().getSeconds()
        setDateTime(curr_Date + '/' + curr_month + '/' + curr_year + '  ' + hr + ':' + min + ':' + sec)
        console.log(date)

    }, [date])


    return (
        <ImageBackground
            source={BACKGROUND_IMG}
            //  blurRadius={3}
            style={styles.mainContainer}>
            <View style={styles.fistContainer}>
                <Text style={styles.fistContainer_txtWrapper}>{counter}</Text>
            </View>
            <View style={styles.secondContainer}>
                <TouchableOpacity
                    onPress={() => {
                        if (counter == 0) {
                            alert('You did not read Anything')
                        } else {
                            storeData(),
                                props.navigation.navigate('List')
                        }
                    }}
                    style={{ alignSelf: 'flex-end', marginEnd: 25 }}
                >
                    <AnimatedLottieView
                        source={SAVE_BTN}
                        autoPlay
                        loop
                        style={{ width: 80, height: 40, marginBottom: 20 }}
                    />
                </TouchableOpacity>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    maxHeight={120}
                    max={3}
                    min={0}
                    placeholder="آپ کیا ذکر کرنا چاہتے ہیں"
                    placeholderStyle={{ color: COLOR_NAVY_BLUE }}
                    style={{ borderColor: COLOR_NAVY_BLUE }}
                    container
                    arrowIconStyle={{ color: COLOR_NAVY_BLUE }}
                    closeIconStyle={{ color: COLOR_NAVY_BLUE }}
                    containerStyle={{ width: '80%', alignItems: 'center', }}
                    textStyle={{ color: COLOR_NAVY_BLUE }}
                    onChangeValue={(t) => { setSelectedItem(t) }}
                />
            </View>
            <View style={styles.thirdContainer}>
                <TouchableOpacity
                    onPress={() => { setCounter(0) }}
                    style={{
                        width: 80, height: 80, backgroundColor: COLOR_WHITE, borderRadius: 100, justifyContent: 'center',
                        alignItems: 'center', position: 'absolute', top: 0, left: 10
                    }}>
                    <Text style={[styles.secondContainer_txtWrapper]}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setCounter(counter + 1) }}
                    style={{
                        width: 200, height: 200, backgroundColor: COLOR_WHITE, borderRadius: 100, justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={styles.thirdContainer_txtWrapper}>Count</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
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
        flexDirection: 'column',
        alignItems: 'center'
    },
    thirdContainer: {
        flex: 1,
        flexDirection: 'row',
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
        fontSize: 120,
        color: COLOR_WHITE,
        fontFamily: 'Roboto-Black'
    },
    secondContainer_txtWrapper: {
        fontSize: 18,
        color: COLOR_NAVY_BLUE,
        textAlign: 'center',
        fontFamily : 'Roboto-Black'
    },
    saveContainer_txtWrapper: {
        fontSize: 18,
        color: COLOR_WHITE,
        textAlign: 'center'
    },
    thirdContainer_txtWrapper: {
        fontSize: 48,
        color: COLOR_NAVY_BLUE,
        fontFamily: 'Roboto-Black'
    }
})