import React, { useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native'
import { DimensionApp } from '../../unit/dimension'
import { TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { firebaseApp } from '../../components/DBFirebase/FirebaseConfig'
const LoginScreen = () => {
    const [state, setState] = useState({
        emailAddress: '',
        password: ''
    })
    const navigation = useNavigation();
    const onGoToMainScreen = () => {
        navigation.navigate('MainTabScreen')
    }
    const onGoToSignUpScreen = () => {
        navigation.navigate('SignupScreen')
    }
    onLogin = () => {
        firebaseApp.auth()
            .signInWithEmailAndPassword(state.emailAddress, state.password)
            .then(() => {
                onGoToMainScreen()
            })
            .catch(e => {
                Alert.alert(
                    'title',
                    'dang nhap that bai'
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
            </View>
            <View style={styles.login_form}>
                <View>

                    <TextInput
                        style={styles.input}
                        placeholder='Username@gmail.com'
                        placeholderTextColor={'#4f9a94'}
                        underlineColorAndroid='transparent'
                        value={state.emailAddress}
                        onChangeText={email => setState({ ...state, emailAddress: email })}
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
                        value={state.password}
                        onChangeText={password => setState({ ...state, password: password })}
                    />
                    <Icon style={styles.inputicon}
                        name={'ios-lock-closed-outline'}
                        size={26}
                    />
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: 18,
                            right: 25
                        }}
                    >
                        <Icon
                            name={'ios-eye-outline'}
                            size={26}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={{ textAlign: 'right' }}>Forgot Password?</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.login_button}>
                <View>
                    <TouchableOpacity
                        style={styles.login}
                        onPress={() => onLogin()}
                    >
                        <Text style={{ ...styles.text_login, color: '#fff' }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ ...styles.text_login, color: '#000' }}>Or</Text>
                <View style={styles.login_social}>
                    <TouchableOpacity
                        style={{ ...styles.button_social, backgroundColor: '#fff' }}
                    >
                        <Image
                            style={styles.button_icon}
                            source={require('../../assets/googlelogo.png')}
                        />
                        <Text style={{ ...styles.text_login, color: '#000' }}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ ...styles.button_social, backgroundColor: '#0d47a1', }}
                    >
                        <Image
                            style={styles.button_icon}
                            source={require('../../assets/facebooklogo.png')}
                        />
                        <Text style={{ ...styles.text_login, color: '#fff' }}>Facebook</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 14 }}>Don't have an account yet? </Text>
                <TouchableOpacity
                    onPress={() => onGoToSignUpScreen()}
                >
                    <Text style={{ fontSize: 16, fontWeight: '400' }}>Signup</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

export default LoginScreen
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
        marginVertical: 5,
        borderRadius: 10
    },
    login_social: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: DimensionApp.getWIDTH() / 10,
        marginVertical: 10
    },
    text_login: {
        fontSize: 18,
        fontWeight: '600'
    },
    button_social: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        borderRadius: 10
    },
    button_icon: {
        width: 20,
        height: 20,
        marginHorizontal: 6
    },
    // input_form: {
    //     flexDirection: 'row',
    // },
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
        left: 20

    }
})