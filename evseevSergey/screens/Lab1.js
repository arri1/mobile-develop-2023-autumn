import React, { useState } from 'react';
import {Alert, Button, Text, View} from 'react-native';
import { State } from 'react-native-gesture-handler';

var text_list = ["stop","pressing","this","button","no, seriously","PLEASE","DON'T","I SAY STOP","F#CK IT, I\'M OUT!"];
var i = 0;

//const [text, setText] = useState("");

const Lab1 = ()=>{
    return(
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                flex:1,
                flexDirection:'column',
                gap:10,
            }}
        >
            <Text
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >{}</Text>
            <Button
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onPress={() => {
                    if(i<text_list.length){
                        Alert.alert(text_list[i])
                        i++;
                    }else if(i>=text_list.length&&i<69){
                        i++;
                    }
                    else if(i==69){
                        Alert.alert("...")
                        let textToChange = ""
                       /* for(j = 0;j<69;j++)
                        {
                            textToChange+=toString(j);
                            //setText(text=>text=textToChange)
                        }*/
                        //Alert.alert("like it?")
                        i++;
                    }else{
                        return NaN
                    }
                }}
                title="I'm just a button"

            />
        </View>
    )
}
export default Lab1;