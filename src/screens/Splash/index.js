import { View, Text } from 'react-native';

const Splash = (props) => {

    setTimeout(() => {
        props.navigation.replace("Main")
    }, 3000);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Splash Screen
            </Text>

        </View>
    )
}

export default Splash;