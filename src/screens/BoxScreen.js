import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const BoxScreen = () => {
    return (
        <View style={style.viewStyle}>
            {/* <Text style={style.textOneStyle}>Child #1</Text>
            <Text style={style.textTwoStyle}>Child #2</Text>
            <Text style={style.textThreeStyle}>Child #3</Text>

            <Text>----------</Text> */}

            <View style={style.viewOneStyle} />
            <View style={style.viewTwoParent}>
                <View style={style.viewTwoStyle} />
            </View>
            <View style={style.viewThreeStyle} />
        </View>


    );
}

const style = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red'
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red'
    },

    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        alignSelf: 'center',
        height: 50,
        width: 50,
        backgroundColor: 'green'
    },
    viewTwoParent: {
        height: 100,
        justifyContent: 'flex-end'
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'blue'
    }
});

export default BoxScreen;