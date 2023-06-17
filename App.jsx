import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ActivityIndicator,Button, TextInput, TouchableHighlight } from 'react-native'
import Counter from './Component/Counter'
import { Header  } from 'react-native/Libraries/NewAppScreen'
import { useState } from 'react'


const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => {

    setCount(count + 1)
    increment = increment + 1
    console.warn(count);
  }
  
  const [showStatusBar, SetshowStatusBar] = useState(false)

  const [UserName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setemail] = useState('')

const submit = () => {


let data = {

UserName: UserName,
Password: password,
email: email,


}

console.log(data)

setemail('')
setPassword('')
setUserName('')

}




  return (
    // <View>
    //   <StatusBar backgroundColor={'yellow'} barStyle={'dark-content'}/>
    //   <Button title='Status-Bar' onPress={() =>
    //   showStatusBar(!showStatusBar)}/>
    //   <ActivityIndicator color={'red'} size={50} ></ActivityIndicator>
    // </View>
    // <View style={{flex:1,backgroundColor:"red" }}>
    // <View style={{flex:2,backgroundColor:"yellow" ,flexDirection:'row'}}>
    // <View style={{flex:1,backgroundColor:"red"}}></View>
    // <View style={{flex:1,backgroundColor:"black"}}>
    // <View style={{flex:1,backgroundColor:"blue" ,flexDirection:'row'}}></View>
    // </View>
    // <View style={{flex:1,backgroundColor:"orange"}}></View>
    // </View>
    // <View style={{flex:1,backgroundColor:"blue"}}>
    // <View style={{flex:2,backgroundColor:"green"}}></View>
    // <View style={{flex:3,backgroundColor:"grey"}}></View>
    // </View>

    
    // <View style={{flex:1,backgroundColor:"pink"  ,flexDirection:'row'}}>
    // <View style={{flex:2,backgroundColor:"green"}}></View>
    // <View style={{flex:2,backgroundColor:"pink"}}></View>
    // </View>

    // </View>

  //   <View>

  //   <Text style={style.myform}>Form</Text>

  //   <TextInput style={style.inp} placeholder='UserName'
  //   onChangeText={(e) => setUserName(e)}
  //   />

  //   <TextInput style={style.inp} placeholder='Email'
  //   secureTextEntry={true}
  //   onChangeText={(e) => setemail(e)}
  //   />
  //   <TextInput style={style.inp} placeholder='Password'
  //   onChangeText={(e) => setPassword(e)}
  //   />

  //   <TouchableOpacity onPress={submit}>
  //     <Text style={style.btn}>Submit</Text>
  //   </TouchableOpacity>

  // </View>


  <view>
    <TouchableHighlight>
      <view style={StyleSheet.r}>

      </view>
    </TouchableHighlight>
  </view> 
  )
}
const style =StyleSheet.create({

  myform:{
    marginTop:100,
    textAlign:'center',
    padding:5,
         
  },

  inp:{
    borderColor:'green',
    
    textAlign:'center',
    padding:10,
    margin:10,
    borderRadius:30,
    borderWidth: 1,
    
  },

  btn:{
    backgroundColor:'brown',
    textAlign:'center',
    padding:20,
    borderRadius:30,
    color:'black',
    margin:10,

  },

  container:{
  flex:1,
  backgroundcolor:'red',
  alignItems:'center',
  justifyContent:'center'
  
  },
  item:{

  },
  bgdanger:{
    backgroundcolor:'black',
  },
  bginfo:{
    backgroundcolor:'red',
  },
  bgsuccess:{
    backgroundcolor:'yellow',
  }

})
export default App
