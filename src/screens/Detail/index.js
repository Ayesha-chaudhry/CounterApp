import {View, Text, FlatList, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Detail = (props) => {
    return(
        <View style={styles.container}>   
        <LinearGradient
                style={styles.box}
                colors={['#89aded', '#76eef5']}
        />    

    <FlatList
        data={[["سبحان الله", "33"], ["الحمد لله", "33"], ["الله أكبر", "33"]]}
        renderItem={({item}) =>{
            return(                
                <View style={styles.card}>

                     <View style={styles.card_right_text}>
                     <Text>{item[0]}</Text>
                     </View>

                     <View style={styles.card_left_text}>
                     <Text>{item[1]}</Text>
                     </View>
                </View>
                
            )
        }}

        keyExtractor={(item) => item}
    />
    </View>
       
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor: '#89aded'
    },
    box:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1
    },
    card:{
        Display: 'flex',
        flexDirection: 'row',
        flexDirection: 'row',
        margin: 12,
        marginLeft: 40,
        width:  '80%',
        height: 80,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 0,
        },
        shadowOpacity: 2.25,
        shadowRadius: 2.84,
        elevation: 2,
        borderColor: '#ffffff',
        borderRadius: 12,
        borderWidth: 0.6
    },
    card_right_text:{
        flex:0.6,
        alignItem: 'center',
        justifyContent: 'center',
        marginRight: 80

    },
    card_left_text:{
        flex:0.4,
        alignItem: 'center',
        justifyContent: 'center',
        marginLeft: 80
    }
    
})
export default Detail;