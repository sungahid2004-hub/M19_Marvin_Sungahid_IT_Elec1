import React from 'react';
import React { useState} from 'react';
import Design from './Design';
import  Button from './Button';

export default function Practice() {
  return (
    <View Style={Design.container}>
      <TextInput
      placeholder='kinsa ka?'
      onchangeText={(text)=>setSuwat(text)}
      style={Design.shoutbox}/>
     <Text style={Design.text}>Chatbox ni{Suwat}</text>
     <chat useraccount="Josh" mensahe="uy paldo."/>
     <chat useraccount="toks" mensahe="uy tagay."/>
     <Text></Text>
  </view>
      
  );
}

const chat = (props)=>
<view>
<Text style={Design.text}>{props.useraccount}:{props.mensahe}
</Text>
</view>
  
