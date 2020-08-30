import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const ProfildeComponent = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box_profile_img}>
                <View style={styles.box_avata}>

                </View>
                <TouchableOpacity style={{ position: 'absolute', bottom: 40, right: 140 }}>
                    <Icon name={'camera'} size={26} />
                </TouchableOpacity>
            </View>
            <View style={styles.box_profile}>
                <View style={styles.profile_info}>
                    <Text style={styles.text_key_info}>EmailAddress</Text>
                    <Text style={styles.text_info}>User@Gmail.com</Text>
                </View>
                <View style={styles.profile_info}>
                    <Text style={styles.text_key_info}>NumberPhone</Text>
                    <Text style={styles.text_info}>*******589</Text>
                </View>
            </View>
            <View style={styles.box_profile}>
                <View style={styles.profile_info}>
                    <Text style={styles.text_key_info}>Name</Text>
                    <Text style={styles.text_info}>Thân Trọng Lợi</Text>
                </View>
                <View style={styles.profile_info}>
                    <Text style={styles.text_key_info}>Gender</Text>
                    <Text style={styles.text_info}>male</Text>
                </View>
                <View style={styles.profile_info}>
                    <Text style={styles.text_key_info}>Birthday</Text>
                    <Text style={styles.text_info}>**/**/****</Text>
                </View>
                <View style={styles.profile_info}>
                    <Text style={styles.text_key_info}>Job</Text>
                    <Text style={styles.text_info}></Text>
                </View>
            </View>
            <View style={{ ...styles.box_profile, flex: 1, backgroundColor: '#80d6ff' }}>

            </View>
        </SafeAreaView>
    )
}

export default ProfildeComponent
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box_profile_img: {
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box_avata: {
        width: 160,
        height: 160,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 100
    },
    box_profile: {
        // flex: 1,
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    profile_info: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text_key_info: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text_info: {
        fontSize: 16
    }
})