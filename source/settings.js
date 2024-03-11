import React from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';
import Arrow from '../assets/Arrow.jpg'
import Like from '../assets/Like.png'
import Switch from '../assets/Switch.png'
import SwithchTheme from './switch';
import Browser from '../assets/Browser.png'
import Faq from '../assets/faq.png'
import Forward from '../assets/Forward.png'
import Privacy from '../assets/Privacy.png'
import Terms from '../assets/Terms.png'
import SignOut from '../assets/Signout.png'


const SettingsLayout = () => {
    return (
        <View style={styles.container}>
            <Image
                source={Arrow}
                style={{ width: 20, height: 50, marginLeft: 10 }}
            />
            <Text style={styles.header}>Settings</Text>

            <View style={styles.subcontent}>
                <Text style={styles.subheader}>General</Text>
                <View style={styles.contents}>
                    <Image
                        source={Like}
                        style={{ width: 20, height: 19, marginLeft: 10 }}
                    />

                    <View style={styles.inside}>
                        <Text style={styles.subhead}>Leave Feedback</Text>
                        <Text style={styles.description}>Let us know how you like the app!</Text>
                    </View>

                </View>

                <View style={styles.second_contents}>
                    <Image
                        source={Switch}
                        style={{ width: 20, height: 17 }}
                    />
                    <Text style={styles.subhead}> Switch themes</Text>
                    <SwithchTheme />
                </View>

                <View style={styles.third}>
                    <Image
                        source={Browser}
                        style={{ width: 20, height: 17 }}
                    />
                    <Text style={styles.subhead}>Clear cache</Text>
                </View>

                <View style={styles.fourth}>
                    <Image
                        source={Faq}
                        style={{ width: 17, height: 17 }}
                    />
                    <Text style={styles.subhead}>FAQ</Text>
                    <Image
                        source={Forward}
                        style={{ width: 10, height: 12, marginLeft: 30 }}
                    />
                </View>

                <Text style={styles.subtext}>General</Text>

                <View style={styles.fifth}>
                    <Image
                        source={Privacy}
                        style={{ width: 18, height: 17 }}
                    />
                    <Text style={styles.subhead}>Data and privacy terms</Text>
                    <Image
                        source={Forward}
                        style={{ width: 10, height: 12, marginLeft: 30 }}
                    />
                </View>

                <View style={styles.sixth}>
                    <Image
                        source={Terms}
                        style={{ width: 18, height: 17 }}
                    />
                    <Text style={styles.subhead}>Terms and condition</Text>
                    <Image
                        source={Forward}
                        style={{ width: 10, height: 12, marginLeft: 30 }}
                    />
                </View>

                <View style={styles.last}>
                    <Image
                        source={SignOut}
                        style={{ width: 18, height: 17 }}
                    />
                    <Text style={styles.subhead}>Sign out</Text>

                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 15,
        padding: 7,
    },
    header: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 15,
        marginBottom: 10
    },
    subcontent: {
        backgroundColor: 'rgba(231, 231, 231, 0.46)',
        resizeMode: 'contain',
        padding: 10,
        left: 5,
        width: '99%',
        height: '100%'
    },
    subheader: {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 10,
        // marginLeft: 10,
        fontWeight: "500"
    },
    contents: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 60,
        width: '99%',
        alignItems: 'center',
        gap: 14,
        marginBottom: 10,
        borderRadius: 10,
        marginLeft:5,
    },
    subhead: {
        fontSize: 15,
        fontWeight: 'bold',
        width: '70%'
    },
    description: {
        color: 'gray'
    },
    second_contents: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 40,
        width: '99%',
        alignItems: 'center',
        marginBottom: 2,
        marginLeft:5,
        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
        padding: 5,
        gap: 14,

        // justifyContent:''
    },
    third: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 40,
        width: '99%',
        alignItems: 'center',
        padding: 5,
        gap: 14,
        marginLeft:5,
    },
    fourth: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 40,
        width: '99%',
        alignItems: 'center',
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        padding: 5,
        gap: 14,
        marginLeft:5,
    },
    subtext: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10
    },
    fifth: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 40,
        width: '99%',
        alignItems: 'center',
        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
        padding: 5,
        gap: 14,
        marginLeft:5,
    },
    sixth: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 40,
        width: '99%',
        alignItems: 'center',
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        padding: 5,
        gap: 14,
        marginLeft:5,
    },
    last: {
        marginTop: 30,
        flexDirection: 'row',
        padding: 5,
        gap: 14,
        marginLeft:5,
    }
})

export default SettingsLayout