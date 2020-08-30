import React, { useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    TouchableOpacity,
    Alert,
    TextInput
} from 'react-native'
import { DimensionApp } from '../../unit/dimension'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { firebaseApp } from '../../components/DBFirebase/FirebaseConfig'
const SignupScreen = () => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [repassword, setRepassword] = useState('')
    const [state, setState] = useState({
        emailAddress: '',
        password: ''
    })
    const navigation = useNavigation();
    onGoToLoginScreen = () => {
        navigation.navigate('LoginScreen')
    }
    onRegister = () => {
        firebaseApp.auth()
            .createUserWithEmailAndPassword(state.emailAddress, state.password)
            .then(() => {
                Alert.alert(
                    'Register Successfully',
                    'Hello ' + state.emailAddress,
                    [
                        { text: 'OK', onPress: () => onGoToLoginScreen() }
                    ],
                    { cancelable: false }
                )
                // setEmail(email.toString())
                // setPassword(password.toString())
                setState({
                    emailAddress: '',
                    password: ''
                })
            })
            .catch(e => {
                console.log(e)
                Alert.alert(
                    'Alert title',
                    'Dang ky that bai',
                    [
                        { text: 'OK' },
                        { text: 'Cancle' }
                    ],
                    { cancelable: false }
                )
            })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    style={styles.logo_header}
                    source={require('../../assets/logo.png')}
                />
                <TouchableOpacity style={{ position: 'absolute' }} onPress={() => onGoToLoginScreen()}>
                    <Icon
                        name={'chevron-back-outline'}
                        size={30}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.login_form}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='Username@gmail.com'
                        keyboardType='email-address'
                        placeholderTextColor={'#4f9a94'}
                        underlineColorAndroid='transparent'
                        onChangeText={email => setState({ ...state, emailAddress: email })}
                        value={state.emailAddress}
                    />
                    <Icon
                        style={styles.inputicon}
                        name={'ios-person-outline'}
                        size={26}
                        color={'#000'}
                    />
                </View>
                <View>

                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor={'#4f9a94'}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                        onChangeText={password => setState({ ...state, password: password })}
                        value={state.password}
                    />
                    <Icon style={styles.inputicon}
                        name={'ios-lock-closed-outline'}
                        size={26}
                    />
                </View>
                {/* <View>

                    <TextInput
                        style={styles.input}
                        placeholder='RePassword'
                        placeholderTextColor={'#4f9a94'}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={repassword => setRepassword({ repassword })}
                    />
                    <Icon style={styles.inputicon}
                        name={'ios-lock-closed-outline'}
                        size={26}
                    /> */}
                {/* </View> */}

            </View>
            <View style={styles.login_button}>
                <View>
                    <TouchableOpacity
                        style={styles.login}
                        onPress={() => onRegister()}
                    >
                        <Text style={{ ...styles.text_login, color: '#fff' }}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default SignupScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4db6ac',
    },
    logo_header: {
        width: DimensionApp.getWIDTH() - 10,
        height: DimensionApp.getWIDTH() - 10
    },
    login_form: {
        flex: 1,
        paddingVertical: 10,
        justifyContent: 'center'
    },
    login_button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    login: {
        backgroundColor: '#00867d',
        width: DimensionApp.getWIDTH() - 30,
        height: DimensionApp.getWIDTH() / 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        borderRadius: 10
    },
    text_login: {
        fontSize: 18,
        fontWeight: '600'
    },
    input: {
        color: '#00867d',
        backgroundColor: '#b2fef7',
        height: 45,
        paddingLeft: 45,
        width: DimensionApp.getWIDTH() - 55,
        fontSize: 18,
        marginVertical: 10,


    },
    inputicon: {
        position: 'absolute',
        top: 18,
        left: 12

    }
})